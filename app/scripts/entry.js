// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import toDoView from './views/TodoItemView.js'
import $ from 'jquery';
import listCollection from './collections/listCollection';


// $('#add').click(function () {
// 	let newItem = new toDoView($('#listerInput').val());
// 	$('#listerInput').val('');
// 	$('.listBox').append(newItem.el);
// });

let doThese = new listCollection();
var settings = {
	success: function() {
		doThese.forEach((item) => {
			let newItemView = new toDoView(item.get('itemDetail'));
			$('.listBox').append(newItemView.el);
		});
	}
};
doThese.fetch(settings);

$('#add').click(function() {
	let newItem = {
		itemDetail: $('#listerInput').val()
	};
	doThese.create(newItem);
	let newItemView = new toDoView(
		newItem.itemDetail
	);
	$('.listBox').html('');
	$('#listerInput').val('');
	$('.listBox').append(newItemView.el);
	doThese.fetch(settings);
});