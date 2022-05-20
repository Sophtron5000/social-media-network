const router = require('express').Router();
const { getUser, getSingleUser, newUser, updateUser } = require('../../controller/userController')

router.route('/').get(getUser).post(newUser);

router.route('/:id').get(getSingleUser).put(updateUser)

module.exports = router;
