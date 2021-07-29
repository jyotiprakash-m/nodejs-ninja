const express = require('express')

const router = express.Router()
const Blog = require('../models/blog');
const blogController = require('../controllers/blogController')


router.get('/', blogController.blog_index)

/**
 * Create blog in a form
 */
router.get('/create', blogController.blog_create_get)

router.post('/', blogController.blog_create_post)

/**
 * Route parameter
 * localhost:4000/blogs/:id
 * localhost:4000/blogs/65465465aa
 */

router.get('/:id', blogController.blog_details)


/**
 * Delete blog
 */

router.delete('/:id', blogController.blog_delete)

module.exports = router;