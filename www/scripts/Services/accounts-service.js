'use strict';

function accountsService() {
	var accounts = [
		{
			id: 0,
			name: 'Personal',
			icon: 'ion-ios-person',
			comments: 'this is default account, cannot be removed.'
		}, {
			id: 1,
			name: 'My custom account',
			icon: 'ion-ios-person'
		}
	];

	return {
		getAll: function () { return accounts; },

		get: function(id) {
			for (var i = 0; i < accounts.length; i++)
				if (accounts[i].id === id)
					return accounts[i];
			return null;
		}
	};
}

angular
	.module('app.services')
	.factory('AccountsService', [accountsService]);