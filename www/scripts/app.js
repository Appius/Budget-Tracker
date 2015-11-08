'use strict';

angular
	.module('app', ['ionic', 'app.controllers', 'app.services'])
	.run([       '$rootScope','$state', '$stateParams', '$ionicPlatform',
		function ($rootScope,  $state,   $stateParams,   $ionicPlatform) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;

			$ionicPlatform.ready(function() {
				if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
					cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
					cordova.plugins.Keyboard.disableScroll(true);
				}
				if (window.StatusBar) {
					StatusBar.styleLightContent();
				}
			});
		}])
	.config([   '$stateProvider', '$urlRouterProvider',
		function($stateProvider,   $urlRouterProvider) {
			// Set up the various states which the app can be in.
			$stateProvider

				/*
				 * Tab (abstract)
				 */
				.state('tab', {
					"abstract": true,
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
				 * Tabs > Transactions > Edit
				 */
				.state('tab.transactions.edit', {
					url: '/{transactionId}',
					views: {
						'tab-transactions@tab': {
							templateUrl: 'partials/edit-transaction.html',
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
				 * Tabs > Categories > Edit
				 */
				.state('tab.categories.edit', {
					url: '/{categoryId}',

					views: {
						'tab-categories@tab': {
							templateUrl: 'partials/edit-category.html',
							controller: 'EditCategoryCtrl'
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
					url: '/{accountId}',
					cache: false,

					views: {
						'tab-accounts@tab': {
							templateUrl: 'partials/edit-account.html',
							controller: 'EditAccountCtrl'
						}
					}
				})

				/*
				 * Icons
				 */
				.state('icons', {
					url: '/icons',

					views: {
						'': {
							templateUrl: 'partials/icons.html',
							controller: 'IconsCtrl'
						},
						'tab-accounts@tab.accounts.edit': {
							templateUrl: 'partials/icons.html',
							controller: 'IconsCtrl'
						}
					}
				});

			// if none of the above states are matched, use this as the fallback
			$urlRouterProvider.otherwise('/tab/dashboard');
		}
	]);

angular
	.module('app.controllers', []);

angular
	.module('app.services', []);