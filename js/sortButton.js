// sortButton.js

var React = require('react');

var sortButton = React.createClass({
  render: function(){
    if (this.props.show) {
      if (this.props.order) {
        return <span className="glyphicon glyphicon-sort-by-attributes" />
      }else{
        return <span className="glyphicon glyphicon-sort-by-attributes-alt" />
      }
    }else{
      return null;
    }
  }
});

module.exports = sortButton;