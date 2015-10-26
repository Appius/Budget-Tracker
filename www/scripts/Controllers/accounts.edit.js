'use strict';

function editAccountCtrl($scope, $stateParams, accountsService) {
	debugger;
	$scope.action = $stateParams.accountId === -1 ? "Create" : "Edit";
	$scope.titleAction = $stateParams.accountId === -1 ? "Add" : "Edit";

	$scope.saveAccount = function (model) {
		debugger;
	}
}

angular
	.module('app.controllers')
	.controller('EditAccountCtrl', ['$scope', '$stateParams', 'AccountsService', editAccountCtrl]);