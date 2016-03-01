// searchBar.js
var React = require('react');

var SearchBar = React.createClass({
	handleChange: function(){
		this.props.onUserInput(
			this.refs.searchText.value,
			this.refs.caseSensitive.checked
		)
	},
	render: function() {

		var style = {
			paddingTop: '5px'
		};

		return (
			<div className="row">
				<div className="col-sm-6">
					<input className="form-control" type="text" ref="searchText" onChange={this.handleChange} placeholder="Search..." />
				</div>
				<div style={style} className="col-sm-6">
					<label>
						<input type="checkbox" ref="caseSensitive" onChange={this.handleChange} defaultChecked /> Case-Sensitive
					</label>
				</div>
			</div>
		);
	}
})

module.exports = SearchBar;