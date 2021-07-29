const express = require('express')

const router = express.Router()
const Blog = require('../models/blog');

const testController = require("../controllers/testController")
/**
 * Add blog Route
 */

router.get('/add-blog', testController.add_blog);

/**
 * Get All Blogs
 */

router.get('/all-blogs', testController.all_blogs)

/**
 * Display particular blog route
 */

router.get('/single-blog', testController.single_blog)

module.exports = router;