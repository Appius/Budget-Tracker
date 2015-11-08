'use strict';

function categoriesCtrl($scope, categoriesService) {
	$scope.init = function() {
		$scope.categories = categoriesService.GetAll();
	}
}

function editCategoryCtrl($scope, $stateParams, $state, categoriesService) {
	var categoryId = parseFloat($stateParams.categoryId);
	if (isNaN(categoryId)) {
		console.error('Cannot parse categoryId as a number. Input: "', $stateParams.categoryId, '".');
		return;
	}

	if (categoryId === -1) {
		$scope.action = 'Create';
		$scope.titleAction = 'Add';
	} else {
		$scope.action = 'Save';
		$scope.titleAction = 'Edit';
	}

	$scope.category = categoriesService.Get(categoryId);

	$scope.saveAccount = function (model) {
		console.log(model, '::not implemented yet');
		return;

		categoriesService.Save(model);
		$state.go('tab.category');
	}
}

angular
	.module('app.controllers')
	.controller('CategoriesCtrl', ['$scope', 'CategoriesService', categoriesCtrl]);

angular
	.module('app.controllers')
	.controller('EditCategoryCtrl', ['$scope', '$stateParams', '$state', 'CategoriesService', editCategoryCtrl]);