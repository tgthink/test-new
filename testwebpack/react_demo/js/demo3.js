const React = require('react');
const ReactDOM = require('react-dom');

var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
  <h2>333333333333333333333</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);