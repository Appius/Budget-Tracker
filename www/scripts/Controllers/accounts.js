'use strict';

function accountCtrl($scope, accountsService) {
	$scope.init = function() {
		$scope.accounts = accountsService.getAll();
	}

	$scope.remove = function (account) {
		console.log(account, '::not implemented yet');
	};
}

angular
	.module('app.controllers')
	.controller('AccountsCtrl', ['$scope', 'AccountsService', accountCtrl]);