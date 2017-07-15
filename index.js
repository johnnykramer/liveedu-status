const request = require('request');
const _ = require('lodash');
const domParser = require('dom-parser');
const parser = new domParser();

function username(username) {
  let userlink = `https://liveedu.tv/${username}/profile`;
  let nodes;
  return new Promise((resolve, reject) => {
    if (!username || username == '') {
      status = 'error';
      resolve(status)
    }
    request(userlink, function (error, response, body) {
      const dom = parser.parseFromString(body);
      nodes = dom.getElementsByClassName('live');
      if (_.isEmpty(nodes)) {
        status = 'offline';
        resolve(status);
      }
      nodes.forEach((el, i) => {
        if (nodes.length == 1) {
          let badge = el.innerHTML;
          if (badge == 'Live') {
            status = 'live';
            resolve(status);
          } else {
            status = 'error';
            resolve(status);
          }
        }
      })
    })
  })
}


module.exports = {
  username,
}