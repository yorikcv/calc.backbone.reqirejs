define(['jquery', 'underscore', 'backbone', 'calculationModel'], function ($, _, Backbone, CalculationModel) {

	Control = Backbone.View.extend({
        el: '.container',
        // display: $("#display"),

        initialize: function(){
        	this.$('.numbers').on('click', this.numbersClick);
        	this.$('.operations').on('click', this.operationsClick);
        	this.$('.equal').on('click', this.equalClick);
        	this.$('.clear').on('click', this.clearClick);

        },

        render: function() {

        	
        },

        numbersClick: function () {
        	// var display = $("#display");

        	if(cacheCalculation.getResult() == 1) {display.value=''; cacheCalculation.setResult('');}
        	
			cacheCalculation.setNumbers(cacheCalculation.getNumbers() + $(this).text());
			console.log(cacheCalculation.getNumbers());
			display.value=(display.value + $(this).text());
        },
        operationsClick: function () {
        	console.log(cacheCalculation.getOperand());
        	 if(cacheCalculation.getOperand() == '')
			{
				cacheCalculation.setFirstNumber(cacheCalculation.getFirstNumber() + cacheCalculation.getNumbers());
				if(cacheCalculation.getFirstNumber() != '')
				{					
					cacheCalculation.setNumbers('');
					cacheCalculation.setOperand($(this).text());
				display.value=(display.value + $(this).text());

					//console.log(numbers + "ope" + operand);
				}
			}

        },
        equalClick: function () {
        	cacheCalculation.setSecondNumber(cacheCalculation.getSecondNumber() + cacheCalculation.getNumbers());
			cacheCalculation.setNumbers('');

			var calculationAdd = new CalculationModel({
				firstNumber: cacheCalculation.getFirstNumber(), secondNumber: cacheCalculation.getSecondNumber(), operand: cacheCalculation.getOperand()
			});
			calculationCollection.add(calculationAdd);
			calculationAdd.save();
			cacheCalculation.setFirstNumber('');
			cacheCalculation.setSecondNumber('');
			

			display.value=(calculationAdd.get('result'));

			
			cacheCalculation.setOperand('');
			cacheCalculation.setResult(1);

        },
        clearClick: function () {
        	display.value='';

			cacheCalculation.setFirstNumber('');
			cacheCalculation.setSecondNumber('');
			cacheCalculation.setOperand('');
			cacheCalculation.setNumbers('');

        }

        // events:{
        // 	'click .numbers' : 'numbersClick'
        // }


    });

	return Control;

});