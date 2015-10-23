'use strict';

function accountCtrl($scope, accountsService) {
	$scope.accounts = accountsService.getAll();
	/*$scope.accounts = [
		{
			id: 0,
			name: 'Default',
			pic: 'http://i277.photobucket.com/albums/kk55/mardellbarrett/avatar_15544.gif'
		}, {
			id: 1,
			name: 'My custom account',
			pic: 'http://orig06.deviantart.net/ea2a/f/2010/213/6/d/facebook_default_picture_by_graffadetoart.jpg'
		}
	];*/
}

angular
	.module('app.controllers')
	.controller('AccountsCtrl', ['$scope', 'AccountsService', accountCtrl]);