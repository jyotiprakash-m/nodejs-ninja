const Blog = require('../models/blog');

const add_blog = (req, res) => {
    const blog = new Blog({
        title: "New Blog 3",
        snippet: "About my new blog 3",
        body: "More about my blog 3"
    });
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

const all_blogs = (req, res) => {
    Blog.find()
        .then((result) => {
            // res.send(result);
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        })
}

const single_blog = (req, res) => {
    Blog.findById("61012feb50fe48348446ba67")
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    add_blog,
    all_blogs,
    single_blog
}