const http = require('http');
const fs = require("fs")

/**
 * Create Server
 * Some Status Code::
 * 200-OK
 * 404-Not Found
 * 301-resource moved
 * 500-Internal server error
 */

const server = http.createServer((req, res) => {
    console.log("Request Made")
    console.log(req.url, req.method)

    // Set Header Contain type
    res.setHeader('Content-Type', 'text/html');

    /**
     * Manually Set things
     */

    // res.write("<head><link rel='styleseet' href='#'/></head>")
    // res.write("<h1>Hello,World!!</h1>")

    /**
     * Send html File . For this we need core node module 'fs'
     * First Step : Read file
     * Note : This is how router are made...
     */

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            // fs.write(data);
            res.end(data)
        }
    })

});

/**
 * Listen the server on port 3000
 * Note 1: Loopback IP address : 127.0.0.1 / localhost
 * Note 2: localhost is the domain name of our computer
 * Note 3: Ports are the doors into the computer (like localhost:3000)
 */

/**
 * Note: The above code is running on the backend not in frontend
 * So,We can not get any response in the frontend...
 */
server.listen(3000, 'localhost', () => {
    console.log("Listening for request on port 3000")
})
