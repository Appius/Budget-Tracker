'use strict';

function iconsCtrl($scope, iconService) {
	$scope.init = function() {
		$scope.icons = iconService.getAll();
	}
}

angular
	.module('app.controllers')
	.controller('IconsCtrl', ['$scope', 'IconsService', iconsCtrl]);