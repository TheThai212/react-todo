var React = require('react');
var ReactDOM = require('react-dom');
var testUtils =require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp',() =>{
  it('should exits',() =>{
    expect(TodoApp).toExist();
  });
});
