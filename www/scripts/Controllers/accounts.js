'use strict';

function accountCtrl($scope, accountsService) {
	$scope.accounts = accountsService.getAll();

	$scope.edit = function (account) {
		console.log(account, '::not implemented yet');
	};

	$scope.remove = function (account) {
		console.log(account, '::not implemented yet');
	};
}

angular
	.module('app.controllers')
	.controller('AccountsCtrl', ['$scope', 'AccountsService', accountCtrl]);