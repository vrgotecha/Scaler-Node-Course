const express = require('express')

const app = express()

// get, post, put, delete

app.get('/', (req,res)=>{
    res.send('Hello from Scalar Topics')
})

app.get('/about', (req,res)=>{
    res.send('We create Impact')
})
app.listen(3000, ()=> console.log('Port running on 3000'))
