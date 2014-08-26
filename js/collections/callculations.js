define(['underscore', 'backbone', 'calculationModel', 'backboneLocalStorage'], 
	function (_, Backbone, CalculationModel, BackboneLocalStorage){

	Сalculations = Backbone.Collection.extend({
		model: CalculationModel
	});

	  localStorage: new BackboneLocalStorage("calc-backbone");

	return Сalculations;
});