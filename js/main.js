require.config({
	baseUrl: "js",
	paths: {
		"jquery": "libs/jquery/dist/jquery",
		"underscore": "libs/underscore-amd/underscore",
		"backbone": "libs/backbone-amd/backbone",

		"calculationModel": "models/calculation",
		"calculationsCollection": "collections/callculations",
		"calculationView": "views/calculation",
		"historyView": "views/history",
		"controlView": "views/control",
		"backboneLocalStorage": "backbone.localStorage"

	}
});

require([
	"calculationModel", 
	"calculationsCollection",
	"historyView",
	"controlView"
	], 

	function (CalculationModel, CalculationsCollection, HistoryView, ControlView) {
	
	cacheCalculation = new CalculationModel({firstNumber: '', secondNumber: '', operand: '', numbers: ''});
	calculationCollection = new CalculationsCollection();

	historyView = new HistoryView({collection: calculationCollection});
	controlView = new ControlView({});




});