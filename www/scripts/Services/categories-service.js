'use strict';

function categoriesService() {
	function getAll() {
		return [
		{
			name: 'Food',
			icon: 'ion-plus',
			type: 'income'
		},
		{
			name: 'Games',
			icon: 'ion-game',
			type: 'expense'
		},
		{
			name: 'Porno',
			icon: 'ion-plus',
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