'use strict';

function transactionsService() {
	var transactions = [
		{
			id: 0,
			category: {
				id: 0,
				name: 'Food',
				icon: 'ion-email',
				type: 'income'
			},
			amount: 200.456,
			description: 'this is description'
		},
		{
			id: 1,
			category: {
				id: 1,
				name: 'Games',
				icon: 'ion-chatbubble-working',
				type: 'expense'
			},
			amount: 2544,
			description: 'this is something'
		},
		{
			id: 2,
			category: {
				id: 1,
				name: 'Games',
				icon: 'ion-chatbubble-working',
				type: 'expense'
			},
			amount: 4444,
			description: 'this is'
		},
		{
			id: 3,
			category: {
				id: 2,
				name: 'Porno',
				icon: 'ion-ios-telephone-outline',
				type: 'expense'
			},
			amount: 1234,
			description: 'that it'
		}
	];

	return {
		GetAll: function () { return transactions; },
		Get: function(transactionId) {
			for (var i=0; i<transactions.length;i++)
				if (transactions[i].id === transactionId)
					return transactions[i];
			return null;
		}
	}
}

angular
	.module('app.services')
	.factory('TransactionsService', [transactionsService]);