angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  Links.getAll().then(function (links) {
    console.log(links);
    $scope.data.links = links;
  });

  $scope.signout = function () {
    console.log("Signout called");
    Auth.signout();
  };

});
