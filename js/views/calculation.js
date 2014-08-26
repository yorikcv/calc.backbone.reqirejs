define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

	Сalculation = Backbone.View.extend({
		tagName: 'li',
		template: _.template($('#templateli').html()),


		initialize: function () {		 
			 
		},

		events: {
			'click .delete': 'destroy'
		},

		render: function () {
			this.model.calc();
		 	console.log(this.model);
			this.$el.html( this.template( this.model.toJSON() ) );
			this.attachEvents();
			return this;
		},

		attachEvents: function() {
			this.model.on('destroy', this.remove, this);
			this.$('.delete').on('click', _.bind(this.destroy, this));
		},

		destroy: function () {
			console.log("yyyeeee");
			this.model.delete();
			this.remove();
		}

	});

	return Сalculation;

});