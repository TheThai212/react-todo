var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils =require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList',() =>{
  it('should exits',() =>{
    expect(TodoList).toExist();
  });

it('should render one Todo Component for each todo item',() =>  {
    var todos = [{
      id:1,
      text:'Do something'
    },{
      id:2,
      text:'check mail '
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);

    expect(todoComponents.length).toBe(todos.length);
  });
});
