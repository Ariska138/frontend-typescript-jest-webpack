//import application level css
import './styles/main.scss'
import {myTest} from 'app/test'
import jquery = require("jquery");
const $: JQueryStatic = jquery;

//application bootstrap goes here
document.getElementsByTagName('span')[0].innerText = myTest() ? "yup" : "nope";

$('p').html('Hello TS');