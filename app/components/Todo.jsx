var React  = require ('react');
var moment = require('moment');

var Todo = React.createClass({
  render:function(){
    var {id, text, completed, createAt, completedAt}=this.props;
    var todoClassName = completed ? 'todo todo-completed':'todo';
    var renderDate = () =>{
      var message  = 'Created :';
      var timestamp = createAt;

      if(completed){
        message = 'Complete ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMMM Do,YYYY @ h:mm a');
    };
    return(
      <div className={todoClassName} onClick={()=>{
          this.props.onToggle(id);
        }}>
        <div><input type="checkbox" checked={completed}></input></div>
        <div>
          <p>{text}</p>
          <p>{renderDate()}</p>
      </div>
      </div>
    )
  }
});

module.exports = Todo;
