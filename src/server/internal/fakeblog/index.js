function FakeBlog() {
  const blogPosts = {};

  function addBlogPost(post) {
    blogPosts[post.id] = post;
  }

  function getBlogById(id) {
    return blogPosts[id];
  }

  return Object.freeze({
    addBlogPost,
    getBlogById
  });
}

FakeBlog.deps = [];

module.exports = FakeBlog;
