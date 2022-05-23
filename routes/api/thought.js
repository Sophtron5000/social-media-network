const router = require('express').Router();
const { getThought, getSingleThought, newThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controller/thoughtController')

router.route('/').get(getThought).post(newThought);

router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route("/:id/reactions/:reactionId").post(addReaction).delete(deleteReaction);

module.exports = router;
