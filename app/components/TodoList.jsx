var React = require('react');
var Todo = require('Todo');
var TodoList  = React.createClass({
  render:function(){
    var {todos} = this.props;
    var renderTodos = () =>{
      return todos.map((todo)=>{
        return (
          <Todo Key={todo.id} {...todo}></Todo>
        )
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
