// Because we loaded the html with socket.io script we will have access to the client socket library 
const socket = io()

socket.on('updatedCount', (count) => {
  console.log('The Socket has been updated', count)
})

document.querySelector('#inc').addEventListener('click', () =>{
  console.log('clicked')
  socket.emit('inc')
})