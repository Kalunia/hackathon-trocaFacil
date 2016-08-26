const milieu = require('milieu');

const config = milieu('troca-facil-api', {
  environment: 'dev',
  server: {
    port: 8080
  },
  mongo: {
    url: 'mongodb://localhost/troca-facil-api'
  }
});


module.exports = config;
