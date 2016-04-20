angular.module('blogApp')
  .controller('PostController', function () {
    this.post = {};
    this.post.date = Date.now();

    this.addPost = function(blog) {
      blog.posts.push(this.post);
      this.post = {};
    };
});
