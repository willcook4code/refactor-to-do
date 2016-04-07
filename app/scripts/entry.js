// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import toDoView from './views/TodoItemView.js'
import $ from 'jquery';



$('#add').click(function () {
	console.log($('#listerInput').val());
	const newItem = new toDoView($('#listerInput').val());
	$('#listerInput').val('');
	console.log(newItem);
	return newItem;
});

