const PROXY_CONFIG = {
  "https://ozone-api-development.azurewebsites.net/*": {
    "target": "https://ozone-api-development.azurewebsites.net/",
    "changeOrigin": true,
    "logLevel": "debug",
    "onProxyRes": (proxyRes, req, res) => {
      if (proxyRes.headers['set-cookie']) {
        const cookies = proxyRes.headers['set-cookie'].map(cookie =>
          cookie.replace(/;(\ )*secure/gi, '')
        );
        proxyRes.headers['set-cookie'] = cookies;
      }
    },
    "secure": false
  },
}

module.exports = PROXY_CONFIG;
