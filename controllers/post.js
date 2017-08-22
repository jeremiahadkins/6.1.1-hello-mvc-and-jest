var Post = require('../models/post');

var PostController = {
  list: function(req, res){
    res.render('post/list', {posts: Post.all()});
  },
  detail: function(req, res){
    var postId = req.params.id;
    res.render('post/detail', Post.findOne(postId));
  }
};

module.exports = PostController;
