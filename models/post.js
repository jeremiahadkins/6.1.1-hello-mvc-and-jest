let Post = {
  data: [
    {id: 1, title: 'MVC for modern web frameworks', body: 'Lorem ipsum dolor sit amet.'},
    {id: 2, title: 'Express makes web dev fun!', body: 'Sed do eiusmod tempor incididunt ut!'},
    {id: 3, title: 'How to make a model', body: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'}
  ],
  all: function(){
    return this.data;
  },
  findOne: function(id){
    return this.data.find(function(post){
      return post.id == id;
    });
  }
};

module.exports = Post;
