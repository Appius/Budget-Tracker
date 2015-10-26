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

			// Setup an abstract state for the tabs directive
			.state('tab', {
				// With abstract set to true, that means this state can not be explicitly activated.
				// It can only be implicitly activated by activating one of its children.
				"abstract": true,

				// This abstract state will prepend '/contacts' onto the urls of all its children.
				url: '/tab',

				templateUrl: 'partials/tabs.html'
			})

			/*
			 * Tabs > Dashboard
			 */
			.state('tab.dashboard', {
				url: '/dashboard',
				views: {
					'tab-dashboard': {
						templateUrl: 'partials/tab-dashboard.html',
						controller: 'DashboardCtrl'
					}
				}
			})

			/*
			 * Tabs > Transactions
			 */
			.state('tab.transactions', {
				url: '/transactions',
				views: {
					'tab-transactions': {
						templateUrl: 'partials/tab-transactions.html',
						controller: 'TransactionsCtrl'
					}
				}
			})

			/*
			 * Tabs > Categories
			 */
			.state('tab.categories', {
				url: '/categories',
				views: {
					'tab-categories': {
						templateUrl: 'partials/tab-categories.html',
						controller: 'CategoriesCtrl'
					}
				}
			})

			/*
			 * Tabs > Accounts
			 */
			.state('tab.accounts', {
				url: '/accounts',
				views: {
					'tab-accounts': {
						templateUrl: 'partials/tab-accounts.html',
						controller: 'AccountsCtrl'
					}
				}
			})

			/*
			 * Tabs > Accounts > Edit
			 */
			.state('tab.accounts.edit', {
				url: '/:accountId',

				views: {
					'tab-accounts': {
						templateUrl: 'partials/edit-account.html',
						controller: 'EditAccountCtrl'
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