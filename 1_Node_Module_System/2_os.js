const os = require('os')

console.log(os.arch())

console.log(os.platform())

console.log(os.networkInterfaces())

console.log(os.cpus())
console.log(os.totalmem())
console.log(os.freemem())

console.log(os.availableParallelism()) // Added by me
console.log(os.tmpdir()) // Added by me