// FilterableTable.js
var React = require('react');
var fitsFilter = require('./fitsFilter');
var tableSort = require('./tableSort');
var SortButton = require('./sortButton');
var PieChart = require('./pieChart');

var TableRow = React.createClass({
	render: function() {
	  return (
	    <tr>
	      <td>{this.props.row.name}</td>
	      <td>{this.props.row.model}</td>
	      <td>{this.props.row.manufacturer}</td>
	      <td>{this.props.row.crew}</td>
	      <td>{this.props.row.passengers}</td>
	      <td>{this.props.row.hyperdrive_rating}</td>
	    </tr>
	  );
	}
});

var FilterableTable = React.createClass({
	getInitialState: function(){
		return {order: true, sort: 'name'};
	},
	handleSort: function(value){

		var order = this.state.order;
		var sort = this.state.sort;

		if(sort == value){
			order = !order;
		}else{
			sort = value;
			order = true;
		}

		this.setState({
			order: order,
			sort: sort
		});

	},
	render: function(){
		var searchText = this.props.searchText || "";
		var caseSensitive = this.props.caseSensitive || false;
		var rows = [];

		if (this.props.rows) {

			//Sort
			this.props.rows = tableSort(this.props.rows, this.state.sort, this.state.order);

			this.props.rows.forEach(function(row){
				if(fitsFilter(row, searchText, caseSensitive)){
					rows.push(<TableRow key={row.name} row={row} />);
				}
			})
		}

		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th>
							<nobr><a href="#" onClick={this.handleSort.bind(this, "name")}>
								Name <SortButton show={"name" === this.state.sort} order={this.state.order} />
							</a></nobr>
						</th>
						<th>Model</th>
						<th>Manufacturer</th>
						<th>
							<nobr><a href="#" onClick={this.handleSort.bind(this, "crew")}>
								Crew <SortButton show={"crew" === this.state.sort} order={this.state.order} />
							</a></nobr>
						</th>       
						<th>
							<nobr><a href="#" onClick={this.handleSort.bind(this, "passengers")}>
								Passengers <SortButton show={"passengers" === this.state.sort} order={this.state.order} />
							</a></nobr>
						</th>
						<th>
							<nobr><a href="#" onClick={this.handleSort.bind(this, "hyperdrive_rating")}>
								Hyperdrive Rating <SortButton show={"hyperdrive_rating" === this.state.sort} order={this.state.order} />
							</a></nobr>
						</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
});

module.exports = FilterableTable;