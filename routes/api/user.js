const router = require('express').Router();
const { getUser, getSingleUser, newUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controller/userController')

router.route('/').get(getUser).post(newUser);

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
