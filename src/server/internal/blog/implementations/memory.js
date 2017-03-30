function MemoryBlog(FakeBlog) {
  async function getBlogById(id) {
    return FakeBlog.getBlogById(id);
  }

  return Object.freeze({
    getBlogById
  });
}

MemoryBlog.deps = ['fakeblog'];

module.exports = MemoryBlog;
