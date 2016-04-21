'use strict';

angular.module('blogApp')
  .controller('BlogController', ['$http', function($http) {
    var blog = this;
    blog.posts = [];

    $http.get('seed/posts.json').success(function (data) {
      blog.posts = data;
    });
}]);
