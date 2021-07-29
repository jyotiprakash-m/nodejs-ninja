const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();
const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes')
const testRoutes = require('./routes/testRouters')

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

/**
 * This will redirect to blogs router .. it is so cool
 */
app.get('/', (req, res) => {
    res.redirect('/blogs')
})



/**
 * Blog Routes
 */
app.use('/blogs', blogRoutes)
/**
 * Test Routes
 */
app.use('/test', testRoutes)

/**
 * 404 page setup .It will display If it not found any route
 */
app.use((req, res) => {
    res.status(404).render('404', { title: "Not Found" })
})