// import React from 'react';
// import ReactDOM from 'react-dom';
// require('es5-shim');
// require('es5-shim/es5-sham');
// require('console-polyfill');
// const React = require('react');
// const ReactDOM = require('react-dom');
// const Publisher = require('./components/Publisher/Publisher.jsx');

// import React from 'react';
// import ReactDOM from 'react-dom';
const React = require('react');
const ReactDOM = require('react-dom');
import style from './stats.less';
import Publisher from './components/Publisher/Publisher.jsx';
import Progress from './components/Publisher/Progress.jsx';
//import ChipExampleArray from './components/Publisher/ChipExampleArray.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/Publisher/MyAwesomeReactComponent.jsx';

// ReactDOM.render(
// 	<h1>Hello, world!</h1>,
// 	document.getElementById('container-stats')
// );
// document.write("cccccccccccccccccccccccccc");
// @ Stats
const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

var Stats = React.createClass({
	getInitialState: function() {
		return {

		};
	},
	render: function() {
		return (
			<div className="aaaaaaaaaaaa" >
				<App />
				<Publisher />
				<Progress />
			</div>
		);
	}
});
ReactDOM.render(<Stats />,  document.getElementById("container-stats"));
// ReactDOM.render(
//     <Publisher />,
//     document.getElementById('container-stats')
// );




