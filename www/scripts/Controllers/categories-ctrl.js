'use strict';

function categoriesCtrl($scope, categoriesService) {
	$scope.init = function() {
		$scope.categories = categoriesService.GetAll();
	}
}

angular
	.module('app.controllers')
	.controller('CategoriesCtrl', ['$scope', 'CategoriesService', categoriesCtrl]);