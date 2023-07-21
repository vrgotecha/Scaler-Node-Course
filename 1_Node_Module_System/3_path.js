const path = require('path')

let ext = path.extname('D:\\Courses\\Scaler\\Full_Stack_Developer\\Ultimate_Node_Course\\1_Node_Module_System\\f1.txt')

let basename = path.basename('D:\\Courses\\Scaler\\Full_Stack_Developer\\Ultimate_Node_Course\\1_Node_Module_System\\f1.txt')
console.log(ext)

console.log(basename)

console.log(__filename)
console.log(__dirname)

console.log(path.dirname(__filename))

console.log(path.parse(__filename).base)