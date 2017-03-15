const sumMicroservice = require('seneca')();

sumMicroservice.add({role:'math',cmd:'sum'}, function(msg, done) {
  const sum = msg.left + msg.right;
  done(null, {sum});
});

sumMicroservice.listen({host: '0.0.0.0', port: '3000'});
// module.exports = sumMicroservice;
