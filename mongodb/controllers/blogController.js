/**
 * Let`s create some function
 * -blog_index
 * -blog_details
 * -blog_create_get
 * -blog_create_post
 * -blog_delete
 */
const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('blog', { title: "Blog", data: result });
        })
        .catch((err) => {
            console.log(err)
        })
}

const blog_create_get = (req, res) => {
    res.render('create', { title: "Create Blog" });
}

const blog_create_post = (req, res) => {
    // console.log(req.body)

    // Here we create a new instance of blog
    const blog = new Blog(req.body)

    // Save and redirect the blog to the all blogs route
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        })
}

const blog_details = (req, res) => {
    const id = req.params.id;
    // console.log(id)

    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: "Blog Details" })
        })
        .catch((err) => {
            console.log(err)
        })
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({
                redirect: '/blogs'
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_details,
    blog_delete
};
