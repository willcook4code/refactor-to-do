import Backbone from 'backbone';
import listModel from '../models/listModel';

const listCollection = Backbone.Collection.extend({
	model: listModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/do-this'
});

export default listCollection;