angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  // $scope.link = {};
  $scope.addLink = function (link) {
    console.log(link);
    Links.addOne(link);
    $scope.link = link;
  };
  $scope.submit = function(){
    if ($scope.text){
      $scope.addLink(this.text);
    }
  }
});
