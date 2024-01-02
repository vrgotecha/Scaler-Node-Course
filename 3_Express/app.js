const express = require('express')
const morgan = require('morgan')

const app = express()

const myMiddleWareFunction = require('./middlewares/middle')
const mySecondMiddleWareFuntion = require('./middlewares/middle_2')
// get, post, put, delete

app.use(express.json())

app.use(myMiddleWareFunction)
app.use(mySecondMiddleWareFuntion)

// app.use(morgan())
app.use(morgan('dev'))
let courses = [
    {id : 1, name : 'Javascript'},
    {id : 2, name : 'Java'},
    {id : 3, name : 'Python'}
]
app.get('/', (req,res)=>{
    res.send('Hello from Scalar Topics')
}) // Read

app.get('/about', (req,res)=>{
    res.send('We create Impact')
})

app.get('/contact', (req, res)=>{
    res.send('Contact us a abcd@abcd.com')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.post('/courses', (req, res) => {
    const course = {
        id : courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
}) // Create

// put method

app.put('/courses/:coursename' , (req, res) => {
    let course = courses.find(course => course.name === req.params.coursename)
    if (!course) res.status(404).send('The course you are looking for does not exit')

    course.name = req.body.name
    res.send(course)
})


// Route Parameters

app.get('/courses/:coursename' , (req, res)=>{
    // res.send(req.params.id)
    // console.log(req.params)

    // let course = courses.find(course => course.id === parseInt(req.params.id))
    let course = courses.find(course => course.name === req.params.coursename)
    if (!course) res.status(404).send('The course you are looking for does not exit')
    res.send(course)
})

// app.delete('/courses/:coursename' , (req, res) => {
//     let UpdatedCourses = courses.filter(course => course.name !== req.params.coursename)
//     console.log(UpdatedCourses)
//     courses = UpdatedCourses

//     res.send(courses)
// })

app.delete('/courses/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if (!course) res.status(404).send('The course you are looking for does not exist')

    const index = courses.indexOf(course)

    courses.splice(index, 1)

    res.send(course)
})
const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`Port is running on ${port}`))
