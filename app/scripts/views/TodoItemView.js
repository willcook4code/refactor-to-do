import Backbone from 'backbone';
import $ from 'jquery';


const ToDoView = Backbone.View.extend({
	tagName: 'li',
	className: 'item',
	events: {
        'click': 'removeItems'
    },
	initialize: function(item) {
		this.item = item;
		this.render();
	},
	template: function() {
		return `<input type="checkbox">${this.item}`
	},
	render: function() {
		let inputBank = [];
		this.$el.html(this.template());
		$('.listBox').append(this.el);
		inputBank.push(this.item);
		console.log(inputBank);
	},
	removeItems: function() {
        $(this.el).remove();
    }
});

export default ToDoView