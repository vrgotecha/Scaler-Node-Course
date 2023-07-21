// files

const fs = require('fs')


// 1 read a file

// let fileContent = fs.readFileSync('f1.txt')

// console.log('data of file 1 -> '+ fileContent)

// 2 write in a file

// fs.writeFileSync('f2.txt', 'This is file 2')
// console.log('File has been written')

// 3 append a file

// fs.appendFileSync('f3.txt', ' This is updated data')

// console.log('File has been appended')

// 4 delete a file
// fs.unlinkSync('f2.txt')
// console.log('File has been deleted')


// Directories

// 1 Create a directory

// fs.mkdirSync('myDirectory')

// 2 Check the content of directory

// let folderPath = 'D:\\Courses\\Scaler\\Full_Stack_Developer\\Ultimate_Node_Course\\1_Node_Module_System\\myDirectory'

// let folderContent  = fs.readdirSync(folderPath)
// console.log("Folder Content" , folderContent)

// 3 Check whether a directory exists or not

let doesExist = fs.existsSync('myDirectory')

console.log(doesExist)

// 4 Remove directory

fs.rmdirSync('myDirectory')

console.log('Directory has been deleted')