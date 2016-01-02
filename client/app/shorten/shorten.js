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
    if ($scope.text) {
      $scope.addLink(this.text);
      $scope.mybool = false;
    }
  };
});
