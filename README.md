# RealTime Chat Application

- First Client 1 sends text to the chat server.
- Server save the message in database or filesystem.
- Server sends the same chat message to other clients in the chat room.
![](https://github.com/AhmadAlKhaldi86/real-time-socet-chat-app/blob/main/assets/webSocketProtocol.png)
## WebSocket Protocol vs HTTP Protocol

- webSocket Protocol to establish bi-directional communication between the server and clients. (clients can initiate communication to servers and server can initiate communication with clients).
- Persistent connection : The client can keep the connection open as long as it needs to.
- HTTP to establish one direction communication from client to server  (send request get response).

### Run application

- prod: npm run start
- local/dev: npm run dev

### Resources

- <https://socket.io>
