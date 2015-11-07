'use strict';

function dashboardCtrl($scope, dashboardService) {
	$scope.init = function () {
		$scope.CurrentPeriod = 'Month';
		$scope.ExpensesValue = 100.556;
		$scope.IncomeValue = 600.45;
	}

	$scope.prevMonth = function() {
		console.log('Not implemented yet...');
	}

	$scope.nextMonth = function() {
		console.log('Not implemented yet...');
	}
}

angular
	.module('app.controllers')
	.controller('DashboardCtrl', ['$scope', 'DashboardService', dashboardCtrl]);