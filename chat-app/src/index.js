const path          = require('path');
const http          = require('http');
const express       = require('express');
const socketIo        = require('socket.io');

const app           = express();
const server        = http.createServer(app) // create a server outside of express. express by default does that in the background.
const io            = socketIo(server) // This is why we need to create the server outside of express. Socket.io expect to pass an http server.

const port          = process.env.PORT || 3000
const publicDirPath = path.join(__dirname, '../public') //  Socket Server also expects a client side html to be served. 


// As start will use express static middleware to serve up whatever in public folder
app.use(express.static(publicDirPath))


// Listening for an even to come. 'connection'. But we need a client to connect. look in public/index.html
// Once you setup client.js and index.js when refresh webpage localhost:3000 you should see the log.
io.on('connection', () => {
  console.log('New Socket Connection')
})


server.listen(port, () => {
  console.log(`app is running at ${port}`)
})






