const express = require('express')

// Express App
const app = express();

// Listen for request
/**
 * Express automatically set the response or Content-Type type header (send Method)
 */
app.listen(3000);

app.get('/', (req, res) => {
    res.status(200).send("<p>Home Page</p>")
})

/**
 * Send File on get request
 * Note :We have to mention the root directory otherwise it will try to find the files form absolute
 * path
 */
app.get('/home', (req, res) => {
    res.status(200).sendFile('./views/index.html', { root: __dirname })
})
app.get('/about', (req, res) => {
    res.status(200).sendFile('./views/about.html', { root: __dirname })

})

/**
 * Redirect path 
 */

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

/**
 * Set 404 page
 * Note : position should at most bottom other iit will not work
 * Note 2: Set the status code in the response
 */

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})