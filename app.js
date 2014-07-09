var app = angular.module('app', [])

app.controller('GithubCtrl', function ($scope, GithubSvc) {
  GithubSvc.fetchStories().success(function (users) {
    $scope.users = users
  })
})

app.factory('GithubSvc', function ($http) {
  return {
    fetchStories: function () {
      return $http.get('https://api.github.com/users')
    }
  }
})
