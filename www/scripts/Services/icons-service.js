'use strict';

function iconsService() {
	var iconStrings = ['fa-user', 'fa-track'];

	return {
		getAll: function () {
			debugger;
			return iconStrings;
		}
	}
}

angular
	.module('app.services')
	.factory('IconsService', [iconsService]);