const fs = require('fs');
const path = require('path');

exports.handler = (event, context, callback) => {
  const completionHtmlPath = path.resolve(__dirname, '../../src/stripe/completion.html');
  
  fs.readFile(completionHtmlPath, 'utf8', (err, data) => {
    if (err) {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: err.message }),
      });
    } else {
      callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: data,
      });
    }
  });
};


