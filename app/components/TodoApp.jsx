var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState:function () {
    return{
      showCompleted:false,
      searchText:'',
      todos:  [
        {
          id:uuid(),
          text:'Walk the dog',
          completed: false
      },{
          id:uuid(),
          text:'clean the yarn',
          completed: true
      },{
          id:uuid(),
          text:'hit the dog',
          completed: false
      },{
          id:uuid(),
          text:'eat the dog',
          completed: true
      },{
          id:uuid(),
          text:'kick the dog',
          completed: false
      }
    ]
  };
},
handleToggle:function(id){
  var updatedTodos = this.state.todos.map((todo)=>{
    if(todo.id === id){
      todo.completed  = !todo.completed;
    }
    return todo;
  });
  this.setState({todos:updatedTodos})
},
handleAddTodo: function(text){
  this.setState({
    todos:[
      ...this.state.todos,
      {
        id:uuid(),
        text: text,
        completed: false
      }
    ]
  });
},
handleSearch: function (showCompleted,searchText){
  this.setState({
    showCompleted:showCompleted,
    searchText:searchText.toLowerCase()
  });
},
  render: function(){
    var {todos} =  this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}></TodoSearch>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
      </div>
    );
  }
});


module.exports = TodoApp;
