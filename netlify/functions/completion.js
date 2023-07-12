const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    const completionHtmlPath = path.join(process.cwd(), 'src/stripe/completion.html');
    const completionHtml = fs.readFileSync(completionHtmlPath, 'utf8');

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


