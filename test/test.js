const status = require('../index');
const mocha = require('mocha');
const assert = require('assert');

describe('STATUS', function() {
  it('should return status corectly', function(done) {
    this.timeout(30000);
    let user = 'redironlabs';
    status.username(user)
      .then((status) => {
        if (status == 'live' || status == 'offline') {
          done()
        } else {
          console.log('error')
        }
      })
  }),
  it('should return string', function(done) {
    this.timeout(15000);
    let user = 'johnnykramer';
    status.username(user)
      .then((status) => {
        if (typeof(status) == 'string'){
          done()
        } else {
          console.log('error')
        }
      })
  }),
  it('should return error if empty username', function(done) {
    this.timeout(30000);
    let user = '';
    status.username(user)
      .then((status) => {
        if (status == 'error') {
          done()
        } else {
          console.log('error')
        }
      })
  })
})