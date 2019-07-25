var socketIO = require('socket.io');
var db = require('./db');

function connect(server) {
  const io = socketIO(server);
  usersNamespace(io);
}

function usersNamespace(io) {
  const users = io.of('/users');

  users.on('connection', socket => {

    socket.on('start-chat', (toUser, fromUser) => {
      if (toUser) {
        users.in(toUser.email).emit('start-chat', fromUser);
      }
    });

    socket.on('message', (msg, toUser) => {
      if(toUser){
        users.in(toUser.email).emit('new message', msg);
      }
    });

    socket.on('login', user => {
      socket.join(user.email);
      db.getClient().collection('students').findOneAndUpdate(
        { email: user.email },
        { $set: { 'loggedIn': true } },
        { returnOriginal: false },
        function (err, result) {
          if (err) {
            socket.emit('list_errors', err);
          } else if (result.value === null) {
            socket.emit('list_errors', { error: 'Student Doesnt exist' });
          } else {
            socket.emit('logged_in', result.value);
          }
        }
      )
    });

    socket.on('logout', user => {
      socket.leave(user.email);
      db.getClient().collection('students').findOneAndUpdate(
        { email: user.email },
        { $set: { 'loggedIn': false } },
        { returnOriginal: false },
        function (err, result) {
          if (err) {
            socket.emit('list_errors', err);
          } else if (result.value === null) {
            socket.emit('list_errors', { error: 'Student Doesnt exist' });
          } else {
            socket.emit('log_out', result.value);
          }
        }
      )
    });


    socket.on('search', (query, fn) => {
      const textQuery = { $text: { $search: query } };
      const learningTargetsQuery = { learningTargets: query };
      const criteria = query ? { $or: [textQuery, learningTargetsQuery] } : {};
      db.getClient().collection('students').find(criteria).sort({}).toArray(function (err, result) {
        if (err) {
          socket.emit('list errors', err);
        } else {
          console.log(result);
          fn(result);
        }
      });
    });
  });
}

module.exports = {
  connect,
}
