module.exports = {
  launch: {
    headless: process.env.HEADLESS === 'true',
    dumpio: true,
    devtools: true,
    browserURL: 'http://localhost:3000',
  },
  server: {
    command: 'yarn start'
  }
}
