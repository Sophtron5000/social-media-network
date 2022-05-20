const router = require('express').Router();
const { getUser, getSingleUser } = require('../../controller/userController')

router.route('/').get(getUser);

router.route('/:id').get(getSingleUser)

module.exports = router;
