const router = require('express').Router();
const { getUser, getSingleUser, newUser, updateUser, deleteUser } = require('../../controller/userController')

router.route('/').get(getUser).post(newUser);

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser)

module.exports = router;
