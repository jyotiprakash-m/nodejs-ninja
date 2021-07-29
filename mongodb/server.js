const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();
const Blog = require('./models/blog');
const { render } = require('ejs');
app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use(express.static('public'))

/**
 * Most use this middleware if you send data from form
 */
app.use(express.urlencoded({ extended: true }))

const baseUrl = "mongodb+srv://jyoti:jyoti@mongodb.fyimu.mongodb.net/nodejs-ninja?retryWrites=true&w=majority"

/**
 * Connect to mongodb
 *Note 1: Mongoose is ODM library : Open Document Mapping library
 */
mongoose.connect(baseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Database Connected!");
        // Then run the express server
        app.listen(4000, () => {
            console.log("Server is running on 4000")
        })
    }).catch((err) => {
        console.log(err)
    })

// 34 minute Imp
/**
 * Display the blogs on the browser screen
 */

app.get('/blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('blog', { title: "Blog", data: result });
        })
        .catch((err) => {
            console.log(err)
        })
})

/**
 * Create blog in a form
 */
app.get('/blogs/create', (req, res) => {

    res.render('create', { title: "Create Blog" });

})

app.post('/blogs', (req, res) => {
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
})

/**
 * Route parameter
 * localhost:4000/blogs/:id
 * localhost:4000/blogs/65465465aa
 */

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id)

    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: "Blog Details" })
        })
        .catch((err) => {
            console.log(err)
        })
})


/**
 * Delete blog
 */

app.delete('/blogs/:id', (req, res) => {
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
})


/**
 * Add blog Route
 */

app.get('/add-blog', (req, res) => {
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
});

/**
 * Get All Blogs
 */

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            // res.send(result);
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        })
})

/**
 * Display particular blog route
 */

app.get('/single-blog', (req, res) => {
    Blog.findById("61012feb50fe48348446ba67")
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

/**
 * 404 page setup .It will display If it not found any route
 */
app.use((req, res) => {
    res.status(404).render('404', { title: "Not Found" })
})