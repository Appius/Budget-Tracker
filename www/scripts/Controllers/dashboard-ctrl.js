'use strict';

function dashboardCtrl($scope/*, dashboardService*/) {
	console.log('something;');
	$scope.init = function () {
		$scope.CurrentPeriod = 'September';
		$scope.ExpensesValue = 100.556;
		$scope.IncomeValue = 600.45;
	}

	$scope.prevMonth = function() {
		console.log('Not implemented yet...');
	}

	$scope.nextMonth = function() {
		console.log('Not implemented yet...');
	}

	$scope.addTransaction = function(type) {
		console.log('addTransaction called......', type);
	}
}

angular
	.module('app.controllers')
	.controller('DashboardCtrl', ['$scope', /*'DashboardService',*/ dashboardCtrl]);