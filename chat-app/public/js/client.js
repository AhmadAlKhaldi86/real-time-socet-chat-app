// Because we loaded the html with socket.io script we will have access to the client socket library 
const socket = io()

/*
// updatedCount is the event name that matches the  event name triggered on the server side.
socket.on('updatedCount', (count) => {
  console.log('The Socket has been updated', count)
})

document.querySelector('#inc').addEventListener('click', () =>{
  console.log('clicked')
  socket.emit('inc')
})
*/

// When first load localhost:3000 you get a welcome message sent from server. 
socket.on('welcome', (message) => {
  console.log(message)
})

document.querySelector('#message_form').addEventListener('submit', (e) =>{
  e.preventDefault()
  // const message = document.querySelector('input').value
  // event.message_form.elementsOfForm.messageNameOfInput
  const message = e.target.elements.message.value

  console.log('new message submitted from client')
  socket.emit('sendMessage',  message)
})

socket.on('updateClients', (update) => {
  console.log(update)
})

