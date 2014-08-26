define(['underscore', 'backbone', 'calculationModel', 'backboneLocalStorage'], 
	function (_, Backbone, CalculationModel, BackboneLocalStorage){

	Сalculations = Backbone.Collection.extend({
		model: CalculationModel
	});

	  localStorage: new Backbone.LocalStorage("calc-backbone");

	return Сalculations;
});