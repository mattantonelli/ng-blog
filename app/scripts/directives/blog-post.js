'use strict';

angular.module('blogApp')
  .directive('blogPost', function () {
    return {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: 'views/blog-post.html'
    };
});
