'use strict';

function categoriesService() {
	function getAll() {
		return [
		{
			name: 'Food',
			icon: 'ion-email',
			type: 'income'
		},
		{
			name: 'Games',
			icon: 'ion-chatbubble-working',
			type: 'expense'
		},
		{
			name: 'Porno',
			icon: 'ion-ios-telephone-outline',
			type: 'expense'
		}];
	}

	return {
		GetAll: getAll
	}
}

angular
	.module('app.services')
	.factory('CategoriesService', [categoriesService]);