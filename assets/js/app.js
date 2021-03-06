var pointless = angular.module('pointless', ['ngRoute', 'ngAnimate', 'ngStorage']);

pointless.config(function($routeProvider) {

	// Change welcome screen if you have visted and entered your name before
	var introURL = 'partials/welcome.html'
	if(!localStorage.getItem('ngStorage-userName')) { introURL = 'partials/intro.html'}

	$routeProvider
		.when('/', {
			templateUrl: introURL,
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
		.when('/love', {
			templateUrl: 'partials/love.html',
			controller: 'loveController'
		});
});