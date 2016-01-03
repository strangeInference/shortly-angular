angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.mybool = true;
  $scope.addLink = function (link) {
    console.log(link);
    Links.addOne(link)
    .then(function (data) {
      $scope.link = data;
    });
  };
  $scope.submit = function () {
    if ($scope.url) {
      $scope.addLink($scope.url);
      $scope.mybool = false;
      $scope.url = '';
    }
  };
});
