var pointless = angular.module('pointless', [
	'ngRoute'
]);

pointless.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/intro', {
		templateUrl: 'intro.html'
	}).
	otherwise({
		redirectTo: '/intro'
	});
}]);