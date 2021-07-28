/**
 * Note: Let`s work with file system of nodejs (in-build 
 * file "fs")
 */

const fs = require('fs')

// console.log(fs)

/**
 * Read File
 * Note 1:Got in puffer format
 * Note 2 :To get in string format use .toString Method
 */


// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

//It take some time to load the file,So the above console run first
// console.log("This is first logging file.")

/**
 * Write File
 * Note 1 : File is not exist then create a new file with this name in that folder
 */

// fs.writeFile('./docs/blog1.txt', "Let change the file", () => {
//     console.log("File is updated successfully!!")
// })


// fs.writeFile('./docs/blog2.txt', "This is the second blog", () => {
//     console.log("File is updated successfully!!")
// })


/**
 * Directories
 * Note 1: If the file is exist then it will throw AN ERROR
 *
 * Note 2: Solution:: So Before doing this Check wheather this folder is present
 */

// if (!fs.existsSync('./assets')) {

//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("Folder created")
//     })
// } else {
//     console.log("File already exist!!")
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("File deleted successfully!")
//     })
// }

/**
 * Delete Files
 */

if (fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("File deleted successfully!!")
        }
    })
} else {
    console.log("File does not exist!")
}