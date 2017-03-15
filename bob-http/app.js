const express = require('express');
const consumerMicroservice = require('seneca')();

consumerMicroservice.client({pin: 'role:math,cmd:sum', host: process.env.SUM_HOST, port: 3000});

const app = express();

app.use('/echo/:msg', (req, res) => {
  res.send(req.params.msg);
});

app.use('/api/:role/:cmd/:left/:right', (req, res) => {
  const role = req.params.role;
  const cmd = req.params.cmd;
  const left = Number(req.params.left);
  const right = Number(req.params.right);

  consumerMicroservice.act({role,cmd},{left,right}, (err, answer) => {
    res.send(answer);
  });
});

app.listen(3000, () => {
  console.log('Express server listening on port: ', 3000);
});
