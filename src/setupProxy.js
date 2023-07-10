const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const target = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:8888' 
        : 'https://ummyahyasbakery.com';

  app.use(
    '/netlify/functions/',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};