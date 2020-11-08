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

// Socket Test Function: S
// socket  passed to function as object and contains info about the client connecting. 
// We will use methods in socket object to communicate with clients. 
// We will update clients by emiting updates. But then the client needs to be able to receive updates. Check client.js
let count = 0
io.on('connection', (socket) => {
  socket.emit('updatedCount', count)
  console.log('New Socket Connection');

  socket.on('inc', () => {
    count++
    // socket.emit('updatedCount', count) // This will work but it will only update the one client who is inc the count.
    io.emit('updatedCount', count)
  })
})








server.listen(port, () => {
  console.log(`app is running at ${port}`)
})






