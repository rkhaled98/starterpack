// change require to es6 import style
import $ from 'jquery';
import './style.scss';

const mainDiv = $('#main');
let num = 0;

setInterval(() => {
  num += 1;
  mainDiv.text(`You've been on this page for ${num} seconds`);
}, 1000);
