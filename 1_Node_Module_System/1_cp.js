const cp = require('child_process')

// cp.execSync('calc')

// cp.execSync('start chrome')

// cp.execSync('start chrome https://www.scaler.com/topics/')

console.log('output ' + cp.execSync('node demo.js'))