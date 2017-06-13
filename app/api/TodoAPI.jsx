var $ = require('jquery')
module.exports = {
  setTodos:function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos',JSON.toString(todos));
      return todos;
    }

  },
  getTodos:function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    // neu todos la array thi thuc hien lenh sau dau '?' sai thi thuc hien sau ':'
    return $.isArray(todos) ? todos : [];

    //code duoi day tuong tu dong 20
    // if($.isArray(todos)){
    //   return todos;
    // }else{
    //   return [];
    // }
  }
};
