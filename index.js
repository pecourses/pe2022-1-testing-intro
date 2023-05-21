const http = require('http')
const app = require('./app')

http.createServer(app).listen(5001, () => console.log('Server running!'))
