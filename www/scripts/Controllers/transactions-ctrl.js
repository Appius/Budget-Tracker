'use strict';

function transactionsCtrl($scope, transactionsService) {
	$scope.init = function() {
		$scope.transactions = transactionsService.GetAll();
	}
}

function editTransactionCtrl($scope, transactionsService) {
	
}

angular
	.module('app.controllers')
	.controller('TransactionsCtrl', ['$scope', 'TransactionsService', transactionsCtrl]);

angular
	.module('app.controllers')
	.controller('EditTransactionCtrl', ['$scope', 'TransactionsService', editTransactionCtrl]);