// change require to es6 import style
import $ from 'jquery';

const mainDiv = $('#main');
let num = 0;

setInterval(() =>{
    count = count + 1;
    mainDiv.text(`You've been on this page for ${num} seconds`)
}, 1000)
