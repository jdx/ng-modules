angular.module('app')
.controller('GithubCtrl', function ($scope, GithubSvc) {
  GithubSvc.fetchStories().success(function (users) {
    $scope.users = users
  })
})
