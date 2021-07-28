/**
 * Middleware with ejs view engine
 */

const express = require('express')
const morgan = require('morgan')
const axios = require('axios')
const data = require('./public/data.json')
const app = express();


app.set('view engine', 'ejs');

app.listen(4000, () => {
    console.log("Server is running on 4000")
})



/**
 * Morgan middleware
 */
app.use(morgan('dev'))

/**
 * MIddleware that allow to use the static files
 * (Like in nextjs public folder...)
 */
app.use(express.static('public'))

app.get('/', (req, res) => {
    const blogs = [
        { title: "First title", snippet: "Some Description" },
        { title: "Second title", snippet: "Some Description" },
        { title: "Third title", snippet: "Some Description" }
    ]
    res.render('./ejs/blog', { title: "Blog", data })
})

app.get('/about', (req, res) => {
    res.render('./ejs/about', { title: "About" })
})

/**
 * Getting Data from external API
 */
app.get('/employee', async (req, res) => {
    const response = await axios.get('https://my-json-server.typicode.com/jyotiprakash-m/news-app/employeeOfTheMonth');
    // const employee = response.json();
    console.log(response.data)
    res.render('./ejs/employee', { title: "Employee", employee: response.data })
})