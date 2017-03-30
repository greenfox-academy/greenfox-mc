import {first} from '../../../lib/async';
import {setBody} from '../decisions';

function BlogAPI(FakeBlog, Cache) {
  async function getBlogById(id) {

    const getFromCache = async () => {
      return await Cache.get(id, null);
    }

    const getFromAPI = async () => {
      const post = await FakeBlog.getBlogById(id)
      const transformedBody = setBody(post);
      Cache.set(id, transformedBody);
      return transformedBody;
    }

    return await first([
      getFromCache,
      getFromAPI,
    ]);

  }

  return Object.freeze({
    getBlogById
  });
}

BlogAPI.deps = ['fakeblog', 'cache'];

module.exports = BlogAPI;
