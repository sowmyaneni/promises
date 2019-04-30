/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  // TODO
  // console.log(filePath);
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      cb(err);
      return;
    }
    cb(err, content.split('\n')[0]);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request({
    method: 'GET',
    uri: url
  }, (err, response) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, response.statusCode);
  });
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};


