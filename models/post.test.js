let Post = require('./post');

describe('Post model', function () {
  test('the all method should return all records', function () {
    expect(Post.all().length).toBe(3);
  });

  test('the findOne method gives us correct post', function () {
    let post = Post.findOne(1);
    expect(post.title).toBe('MVC for modern web frameworks');
    expect(post.id).toBe(1);
  });
});
