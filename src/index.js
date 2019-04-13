// change require to es6 import style
// import $ from 'jquery';
import './style.scss';

// const mainDiv = $('#main');
// let num = 0;

// setInterval(() => {
//   num += 1;
//   mainDiv.text(`You've been on this page for ${num} seconds`);
// }, 1000);


import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));
