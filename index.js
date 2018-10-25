let express = require('express')
let socket = require('socket.io')

//App setup

let app = express()

let server = app.listen(4000, () => {
  console.log('listening to requests on port 4000')
});

//static files

app.use(express.static('public'))

//socket setup

let io = socket(server)

io.on('connection', (socket) => {
  console.log('made socket connection', socket.id)
  socket.on('chat', (data) => {
    console.log('emiting data', data)
    io.sockets.emit('chat', data)
  })
});
