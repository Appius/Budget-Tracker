'use strict';

function accountCtrl($scope, accountsService) {
	$scope.accounts = accountsService.getAll();
}

angular
	.module('app.controllers')
	.controller('AccountsCtrl', ['$scope', 'AccountsService', accountCtrl]);