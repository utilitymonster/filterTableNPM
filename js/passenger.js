// passenger.js
"use strict";

function colorRand(){
	var hex = Math.floor(Math.random()*(Math.pow(16,6))).toString(16);
	return hex;
}

class Passenger {

	constructor(passengers) {
		this.value = 1;
		this.color = '#'+colorRand();
		this.label = passengers+" pass."
		this.total = 0;
		this.percentage = 0;
	}

	set total(total_value){
		this.percentage = Math.round(100*this.value/total_value,1);
	}

	toPie(){
		return {
			value: this.value,
			color: this.color,
			label: this.label+": "+this.percentage+"%"
		};
	}

}

module.exports = Passenger;