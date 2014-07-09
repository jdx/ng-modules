app.factory('GithubSvc', function ($http) {
  return {
    fetchStories: function () {
      return $http.get('https://api.github.com/users')
    }
  }
})
