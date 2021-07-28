const fs = require('fs')

/**
 * Read Stream
 * Note 1:To encode the the text use (utf8)
 */

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });



/**
 * Write Stream
 */

const writeStream = fs.createWriteStream('./docs/blog4.txt');


// readStream.on('data', (chunk) => {
//     console.log("-------------New Chunk--------------")
//     console.log(chunk)
//     // writeStream.write("\n--- New Chunk Arrive----");
//     // writeStream.write(chunk)
// })

/**
 * Piping --easily Write Stream
 */

readStream.pipe(writeStream)