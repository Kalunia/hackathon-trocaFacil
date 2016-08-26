const controllers = require('./controllers');

const Router = require('express').Router;
const router = new Router();


router.get('/', (req, res) => {
  res.json({ message: 'Welcome to troca-facil-api API!' });
});

router.route('/users')
  .get((...args) => controllers.users.find(...args))
  .post((...args) => controllers.users.create(...args));

router.route('/users/:id')
  .put((...args) => controllers.users.update(...args))
  .get((...args) => controllers.users.findById(...args))
  .delete((...args) => controllers.users.remove(...args));


router.route('/locations')
  .get((...args) => controllers.locations.find(...args))
  .post((...args) => controllers.locations.create(...args));

router.route('/locations/:id')
  .put((...args) => controllers.locations.update(...args))
  .get((...args) => controllers.locations.findById(...args))
  .delete((...args) => controllers.locations.remove(...args));


router.route('/jobs')
  .get((...args) => controllers.jobs.find(...args))
  .post((...args) => controllers.jobs.create(...args));

router.route('/jobs/:id')
  .put((...args) => controllers.jobs.update(...args))
  .get((...args) => controllers.jobs.findById(...args))
  .delete((...args) => controllers.jobs.remove(...args));


module.exports = router;
