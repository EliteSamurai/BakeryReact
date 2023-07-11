const fs = require('fs');

exports.handler = async (event) => {
  try {
    const completionHtml = fs.readFileSync('src/stripe/completion.html', 'utf8');

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: completionHtml,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
