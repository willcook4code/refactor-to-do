import Backbone from 'backbone';

const listModel = Backbone.Model.extend({
	defaults: {
		itemDetail: ''
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/do-this',
	idAttribute: '_id'
});

export default listModel;