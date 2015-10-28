var pointless = angular.module('pointless', ['ngRoute', 'ngAnimate']);

pointless.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'partials/intro.html',
			controller: 'introController'
		})
		.when('/main', {
			templateUrl: 'partials/main.html',
			controller: 'mainController'
		})
		.when('/art', {
			templateUrl: 'partials/art.html',
			controller: 'artController'
		})
		.when('/health', {
			templateUrl: 'partials/health.html',
			controller: 'healthController'
		})
		.when('/knowledge', {
			templateUrl: 'partials/knowledge.html',
			controller: 'knowledgeController'
		})
		.when('/relationships', {
			templateUrl: 'partials/relationships.html',
			controller: 'relationshipsController'
		});
});