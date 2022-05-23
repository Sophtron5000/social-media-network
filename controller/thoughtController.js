const Thought = require('../models/Thought');

module.exports = {
  getThought(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
      Thought.findOne({_id: req.params.id}) 
      .then((thought) => {
          if (!thought) {
              return res.status(404).json("Invalid thought")
          } 
          res.json(thought)
      }) .catch((err) => res.status(500).json(err));
  }, newThought(req, res) {
      Thought.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
    updateThought(req, res) {
    Thought.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .then((thought) => {
        if (!thought) {
            return res.status(404).json("invalid thought")
        }
        res.json(thought)
    }).catch((err) => res.status(500).json(err));
},
deleteThought(req, res) {
    Thought.findByIdAndDelete({_id: req.params.id})
      .then((thought) => {
        if (!thought) {
            return res.status(404).json("invalid thought")
        }
        res.json(thought)
    }).catch((err) => res.status(500).json(err));
},
addReaction(req, res) {
    Thought.findOneAndUpdate({_id: req.params.id}, {$addToSet: { Reactions: req.params.reactionId}})
    .then((thought) => {
        if (!thought) {
            return res.status(404).json("invalid thought")
        }
        res.json(thought)
    }).catch((err) => res.status(500).json(err));
},
deleteReaction(req, res) {
    Thought.findByIdAndDelete({_id: req.params.id})
    .then((thought) => {
        if (!thought) {
            res.status(404).json("invalid thought")
        }
        res.json(thought)
    }).catch((err) => res.status(500).json(err));
}
};
