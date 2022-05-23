const router = require('express').Router();
const userRoutes = require('./user');
const friendsRoutes = require('./friends')
// const thoughtRoutes = require('./thoughtRoutes');

router.use('/user', userRoutes);
router.use('/friends', friendsRoutes);
// router.use('/thoughts', thoughtRoutes);

module.exports = router;
