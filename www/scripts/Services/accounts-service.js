'use strict';

function accountsService() {
	var accounts = [
			{
				id: 0,
				name: 'Personal',
				icon: 'fa-user'
			}, {
				id: 1,
				name: 'My custom account',
				icon: 'fa-truck'
			}
	];

	return {
		getAll: function () {
			return accounts;
		}
	};
}

angular
	.module('app.services')
	.factory('AccountsService', [accountsService]);