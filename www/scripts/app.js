'use strict';

angular
	.module('app', ['ionic', 'app.controllers', 'app.services'])
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				StatusBar.styleLightContent();
			}
		});
	})
	.config(function($stateProvider, $urlRouterProvider) {
		// Set up the various states which the app can be in.
		$stateProvider
			// setup an abstract state for the tabs directive
			.state('tab', {
				url: '/tab',
				"abstract": true,
				templateUrl: 'partials/tabs.html'
			})
			.state('tab.dashboard', {
				url: '/dashboard',
				views: {
					'tab-dashboard': {
						templateUrl: 'partials/tab-dashboard.html',
						controller: 'DashboardCtrl'
					}
				}
			})
			.state('tab.transactions', {
				url: '/transactions',
				views: {
					'tab-transactions': {
						templateUrl: 'partials/tab-transactions.html',
						controller: 'TransactionsCtrl'
					}
				}
			})
			.state('tab.categories', {
				url: '/categories',
				views: {
					'tab-categories': {
						templateUrl: 'partials/tab-categories.html',
						controller: 'CategoriesCtrl'
					}
				}
			})
			.state('tab.accounts', {
				url: '/accounts',
				views: {
					'tab-accounts': {
						templateUrl: 'partials/tab-accounts.html',
						controller: 'AccountsCtrl'
					}
				}
			});

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/tab/accounts');
	});

angular
	.module('app.controllers', []);

angular
	.module('app.services', []);