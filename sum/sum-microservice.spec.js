const should = require('should');
const sumMicroservice = require('./sum-microservice');

describe('sumMicroservice', (done) => {
  it('add', (done) => {
    const pattern = {role: 'math', cmd: 'sum'};
    const msg = {left: 2, right: 3}
    sumMicroservice.act(pattern, msg, (err, answer) => {
      answer.should.have.property('sum');
      answer.sum.should.be.exactly(5);
      done();
    });
  });
});
