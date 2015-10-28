pointless.controller('introController', function($scope, $localStorage) {
    $scope.pageClass = 'intro-page';
    $scope.$storage = $localStorage;
});

pointless.controller('mainController', function($scope, $localStorage) {
    $scope.pageClass = 'main-page';
    $scope.$storage = $localStorage;
});

pointless.controller('artController', function($scope) {
    $scope.pageClass = 'art-page';
});

pointless.controller('healthController', function($scope) {
    $scope.pageClass = 'health-page';
});

pointless.controller('knowledgeController', function($scope) {
    $scope.pageClass = 'knowledge-page';
});

pointless.controller('relationshipsController', function($scope) {
    $scope.pageClass = 'relationships-page';
});