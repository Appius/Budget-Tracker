'use strict';

function categoriesService() {
	var categories = [
		{
			id: 0,
			name: 'Food',
			icon: 'ion-email',
			type: 'income'
		},
		{
			id: 1,
			name: 'Games',
			icon: 'ion-chatbubble-working',
			type: 'expense'
		},
		{
			id: 2,
			name: 'Porno',
			icon: 'ion-ios-telephone-outline',
			type: 'expense'
		}];

	function getAll() { return categories; }

	return {
		GetAll: getAll,
		Get: function(categoryId) {
			for (var i = 0; i < categories.length; i++)
				if (categories[i].id === categoryId)
					return categories[i];
			return null;
		}
	}
}

angular
	.module('app.services')
	.factory('CategoriesService', [categoriesService]);