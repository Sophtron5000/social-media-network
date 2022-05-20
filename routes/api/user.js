const router = require('express').Router();
const { getUser } = require('../../controller/userController')

router.route('/').get(getUser);

module.exports = router;
