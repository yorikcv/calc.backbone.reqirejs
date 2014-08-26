define([
	'jquery', 
	'underscore', 
	'backbone',
	'calculationView'], 

	function ($, _, Backbone, CalculationView) {
	
	HistoryCollections = Backbone.View.extend({
		tagName: 'ul',
		id: 'historyUl',

		initialize: function () {
			this.render();
			this.collection.on('add', this.add, this);
		},

		render: function () {

			// this.$el.empty();
			this.collection.each(function (num) {
				var calculationView = new CalculationView({model: num});
								

				this.$el.append(calculationView.render().el);
				//console.log(calculationView.el);
			}, this);

			$('#history').html(this.el);

			return this;
		}, 

		add: function () {
			var calculationView = new CalculationView({model: this.collection.last()});
			this.$el.append(calculationView.render().el);
			$('#history').append(this.el);
		}
	});

	return HistoryCollections;
	
});