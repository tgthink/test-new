const React = require('react');
const ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="aaaaaaaaaaaaa" />,
  document.getElementById('example')
);