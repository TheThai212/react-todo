var React = require('react');

var TodoSearch = React.createClass({
  handleSearch:function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText =  this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render:function(){
    return(
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}></input>
        </div>
        <div>
          <lable>
            <input type="Checkbox" ref="showCompleted" onChange={this.handleSearch}>Show completed todos</input>
          </lable>
        </div>
      </div>

    );
  }
});

module.exports = TodoSearch;
