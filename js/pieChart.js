// pieChart.js

var Pie = require('react-chartjs').Pie;
var React = require('react');
var fitsFilter = require('./fitsFilter');
var Passenger = require('./passenger');

var pieChart = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  render: function(){
 
    var passengers = [];
    var searchText = this.props.searchText || "";
    var caseSensitive = this.props.caseSensitive || false;
    var counter = 0;

    if (this.props.rows) {
      this.props.rows.forEach(function(row) {
        if (fitsFilter(row, searchText, caseSensitive)) {
          counter++;

          if (!passengers[row.passengers]) {
            passengers[row.passengers] = new Passenger(row.passengers);  
          }else{
            passengers[row.passengers].value++;
          }
        }
      });
    }

    var data = [];
    passengers.forEach(function(passenger){
      passenger.total = counter;
      data.push(passenger.toPie());
    });

    var options = {responsive: true};

    return (
      <div>
        <Pie data={data} options={options} height="250" redraw />
      </div>
    )
  }
});

module.exports = pieChart;