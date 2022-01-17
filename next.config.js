module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    WS_URL: process.env.WS_URL
  },
  resolve: {
    mainFields: ['browser', 'main']
  }
}
