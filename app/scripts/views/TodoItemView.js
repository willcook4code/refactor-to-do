import Backbone from 'backbone';
import $ from 'jquery';

let inputBank = [];
const ToDoView = Backbone.View.extend({
	tagName: 'li',
	className: 'items',
	events: {
        'click .done': 'completeItems',
        'click .fa': 'removeItems'
    },
	initialize: function(item) {
		this.item = item;
		this.render();
	},
	template: function() {
		return `<i class="fa fa-trash"></i><input type="checkbox" class="done">${this.item}`
	},
	render: function() {
		
		this.$el.html(this.template());
		inputBank.push(this.item);
		console.log(inputBank);
	},
	completeItems: function() {
        $(this.el).toggleClass('active');
    },
    removeItems: function() {
        $(this.$el).remove();
    }
});

export default ToDoView