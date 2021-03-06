﻿'use strict';

function accountCtrl($scope, accountsService) {
	$scope.init = function() {
		$scope.accounts = accountsService.getAll();
	}

	$scope.remove = function (account) {
		console.log(account, '::not implemented yet');
	};
}

function editAccountCtrl($scope, $stateParams, $state, accountsService) {
	var accountId = parseFloat($stateParams.accountId);
	if (isNaN(accountId)) {
		console.error('Cannot parse accountId as a number. Input: "', $stateParams.accountId, '".');
		return;
	}

	if (accountId === -1) {
		$scope.action = 'Create';
		$scope.titleAction = 'Add';
	} else {
		$scope.action = 'Save';
		$scope.titleAction = 'Edit';
	}

	$scope.account = accountsService.get(accountId);

	$scope.saveAccount = function (model) {
		console.log(model, '::not implemented yet');
		return;

		accountsService.Save(model);
		$state.go('tab.account');
	}
}

angular
	.module('app.controllers')
	.controller('AccountsCtrl', ['$scope', 'AccountsService', accountCtrl]);

angular
	.module('app.controllers')
	.controller('EditAccountCtrl', ['$scope', '$stateParams', '$state', 'AccountsService', editAccountCtrl]);