// How NodeJS differs from VanillaJS
// 1) Node runs on a server - not a browser (backend not frontend)
// 2) The console is the terminal window

console.log("Hello World")

// 3) Global object isntead of window object (browser)

console.log(global)

// 4) Has common core modules
// 5) CommonJS modules instead of ES6 modules

const os = require('os');
const path = require('path')
const { add, subtract, multiply, divide } = require('./math')

console.log(add(2,3))

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))