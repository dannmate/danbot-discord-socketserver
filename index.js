var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    io.emit('freshConnection', 'return some data pls')
    socket.on('memberStatusChange', (msg) => {
        io.emit('memberStatusChange', msg);
        console.log(msg);
      });
      socket.on('freshConnectionData', (msg) => {
        io.emit('memberStatusChange', msg);
        console.log(msg);
      });

      
    
  });

  const port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log('listening on *:3000');
});