// main.js
var api_load = require('./api_load');
var FilterableTable = require('./filterableTable');
var SearchBar = require('./searchBar');
var PieChart = require('./pieChart');
var ReactDOM = require('react-dom');
var React = require('react');
var $ = require('jquery');

var url = 'http://swapi.co/api/starships/?page=1';
var next = 'next';


var StarshipPage = React.createClass({
	getInitialState: function(){
		return {rows: []}
	},
	handleUserInput: function(searchText, caseSensitive) {
		this.setState({
			searchText: searchText,
			caseSensitive: caseSensitive
		});
	},
	componentDidMount: function(){
		
		var results = [];
		var temp_this = this;

		var api_load = function(url, next_url){
	
			$.ajax({
				url: url,
				dataType: 'json',
				success: function(d) {
					(function(data){
						results = results.concat(data.results);
						var url = data[next_url];
						if (url) {
							api_load(url, next_url);
						}else{
							temp_this.setState({
								rows: results
							});
						}
					})(d);

				}
			})
		};

		api_load(url, next);

	},
	render: function(){
		return (
			<div>
				<div className="row" style={{paddingBottom: 20}}>
    	            <div className="col-sm-12">
						<h1>Starships</h1>
						<SearchBar onUserInput={this.handleUserInput} />
					</div>
				</div>
				<div className="row">
	                <div className="col-lg-9 col-md-9 col-sm-12">
						<FilterableTable caseSensitive={this.state.caseSensitive} searchText={this.state.searchText} rows={this.state.rows} />
					</div>
					<div className="col-lg-3 col-md-3 hidden-sm text-center panel">
						<h3 className="hidden-sm">Passengers</h3>
						<PieChart caseSensitive={this.state.caseSensitive} searchText={this.state.searchText} rows={this.state.rows} />
					</div>
				</div>
				<div className="visible-sm row">
					<div className="col-sm-12 text-center">
						<h3>Passengers</h3>
						<PieChart caseSensitive={this.state.caseSensitive} searchText={this.state.searchText} rows={this.state.rows} />
					</div>
				</div>				
			</div>
		)
	}
})

ReactDOM.render(
	<StarshipPage />,
	document.getElementById('container')
);