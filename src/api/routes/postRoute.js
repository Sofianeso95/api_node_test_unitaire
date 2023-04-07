module.exports = (server) => {
    const postController = require('../controllers/postController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');
    server.route('/posts')
        .get(postController.getPosts)
        .post(jwtMiddleware.verifyToken,postController.createPost)
        .delete(postController.deletePosts);
    server.route('/posts/:id')//req.params.post_Id
    .get(postController.getPost)
    .put(postController.updatePosts);

}