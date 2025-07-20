import express from 'express';
import postController from '../controller/post.controller'

const router = express.Router();

router.post('/', postController.addPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

export default router;
