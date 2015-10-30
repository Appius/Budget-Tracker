'use strict';

function editAccountCtrl($scope, $stateParams, accountsService) {
	var accountId = parseFloat($stateParams.accountId);
	if (!accountId) {
		console.error('Cannot parse accountId as a number. Input: "', $stateParams.accountId, '".');
		return;
	}

	if (accountId === -1) {
		$scope.action = 'Create new';
		$scope.titleAction = 'Add';
	} else {
		$scope.action = 'Edit';
		$scope.titleAction = 'Edit';
	}

	$scope.saveAccount = function (model) {
		console.log(model, '::not implemented yet');
		return;

		accountsService.Save(model);
	}
}

angular
	.module('app.controllers')
	.controller('EditAccountCtrl', ['$scope', '$stateParams', 'AccountsService', editAccountCtrl]);