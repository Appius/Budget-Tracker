'use strict';

function accountsService() {
	var accounts = [
			{
				id: 0,
				name: 'Default',
				pic: 'http://i277.photobucket.com/albums/kk55/mardellbarrett/avatar_15544.gif'
			}, {
				id: 1,
				name: 'My custom account',
				pic: 'http://orig06.deviantart.net/ea2a/f/2010/213/6/d/facebook_default_picture_by_graffadetoart.jpg'
			}
	];

	return {
		getAll: function () {
			return accounts;
		}
	};
}

angular
	.module('app.services')
	.factory('AccountsService', [accountsService]);