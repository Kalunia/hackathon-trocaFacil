const milieu = require('milieu');

const config = milieu('troca-facil-api', {
  environment: 'dev',
  server: {
    port: process.env.PORT || 8080
  },
  mongo: {
    url: 'mongodb://heroku_1twx3vdm:j9gd660s1te0ir9to4fljnjcj9@ds017256.mlab.com:17256/heroku_1twx3vdm'
  }
});


module.exports = config;
