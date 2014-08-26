define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

	Сalculation = Backbone.Model.extend({
		defaults: {
			firstNumber: 0,
			operand: '+',
			secondNumber: 1,
			result: 0
		},

		add: function () {
			this.set({result: +(this.get('firstNumber')) + +(this.get('secondNumber'))});
			return this.get('result')
		},

		sub: function () {
			this.set({result: +(this.get('firstNumber')) - +(this.get('secondNumber'))});
			return this.get('result')
		},

		mul: function () {
			this.set({result: +(this.get('firstNumber')) * +(this.get('secondNumber'))});
			return this.get('result')
		},

		div: function () {
			this.set({result: +(this.get('firstNumber')) / +(this.get('secondNumber'))});
			return this.get('result')
		},

		calc: function () {
			if(this.get('operand') == "+") this.add();
			if(this.get('operand') == "-") this.sub();
			if(this.get('operand') == "*") this.mul();
			if(this.get('operand') == "/") this.div();
		},

		delete: function () {
			this.destroy();
		},

		//instrument for Result


		validateResult: function(result) {
			return (result > 100) ? false : true;			
		},

		setResult: function(value) {
			if (this.validateResult()) {
				this.set('result', value);
			}			
		},

		getResult: function() {
			return this.get('result');
		},

		//instrument for firstNumber

		validateFirstNumber: function(firstNumber) {
			return (firstNumber > 100) ? false : true;			
		},

		setFirstNumber: function(value) {
			//if (this.validatefirstNumber()) {
				this.set('firstNumber', value);
			//}			
		},

		getFirstNumber: function() {
			return this.get('firstNumber');
		},

		//instrument for secondNumber

		validateSecondNumber: function(secondNumber) {
			return (secondNumber > 100) ? false : true;			
		},

		setSecondNumber: function(value) {
			//if (this.validatefirstNumber()) {
				this.set('secondNumber', value);
			//}			
		},

		getSecondNumber: function() {
			return this.get('secondNumber');
		},

		//instrument for operand

		validateOperand: function(operand) {
			return (operand > 100) ? false : true;			
		},

		setOperand: function(value) {
			//if (this.validateOperand()) {
				this.set('operand', value);
			//}			
		},

		getOperand: function() {
			return this.get('operand');
		},

		//cache elements

		setNumbers: function(value) {
		
				this.set('numbers', value);
		
		},

		getNumbers: function() {
			return this.get('numbers');
		},

		setNumbers: function(value) {
		
			this.set('numbers', value);
		},

		getNumbers: function() {
			return this.get('numbers');
		},
	});

	return Сalculation;

});