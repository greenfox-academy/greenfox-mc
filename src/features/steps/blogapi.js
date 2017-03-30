'use strict';

import { expect, assert } from 'chai';

export default function () {
  this.Given('I have a blog post "$type"', async function (type) {
    const fakeBlog = this.container.get('fakeblog');
    await fakeBlog.addBlogPost({id: type, body:"test post"});
  });

  this.When('I get the blog post "$type"', async function(type) {
    const blog = this.container.get('blog');
    const post = await blog.getBlogById(type);
    this.context.renderedPage = post.body
  });

  this.Then('I see "$text" in the rendered component', async function(text) {
    assert.include(
      this.context.renderedPage,
      text,
      `Could not find the text "${text}" in the rendered component (${this.context.renderedPage})`
    );

  });
}
