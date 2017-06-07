var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState:function () {
    return{
      todos:  [
        {
          id:1,
          text:'Walk the dog'
      },{
          id:2,
          text:'clean the yarn'
      },{
        id:3,
        text:'hit the dog'
      },{
        id:4,
        text:'eat the dog'
      },{
        id:5,
        text:'kick the dog'
    },
    ]
  };
},
  render: function(){
    var {todos} =  this.state;
    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});


module.exports = TodoApp;
