
export const setBody = (post) => {
  return {...post, body: `${post.body} ${post.id}`};
}
