function mySecondMiddleWare(req, res, next){
    console.log('I am the second middleware')
    next()
}

module.exports = mySecondMiddleWare