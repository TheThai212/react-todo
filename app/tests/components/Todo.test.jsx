var React = require('react');
var ReactDOM = require('react-dom');
var testUtils =require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo',() =>{
  it('should exits',() =>{
    expect(Todo).toExist();
  });
});