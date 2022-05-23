const User = require('../models/User');

module.exports = {
  getUser(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
      User.findOne({_id: req.params.id}) 
      .then((user) => {
          if (!user) {
              return res.status(404).json("Invalid user")
          } 
          res.json(user)
      }) .catch((err) => res.status(500).json(err));
  }, newUser(req, res) {
      User.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
    updateUser(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .then((user) => {
        if (!user) {
            return res.status(404).json("invalid user")
        }
        res.json(user)
    }).catch((err) => res.status(500).json(err));
},
deleteUser(req, res) {
    User.findByIdAndDelete({_id: req.params.id})
      .then((user) => {
        if (!user) {
            return res.status(404).json("invalid user")
        }
        res.json(user)
    }).catch((err) => res.status(500).json(err));
},
addFriend(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, {$addToSet: { Friends: req.params.friendsId}})
    .then((user) => {
        if (!user) {
            return res.status(404).json("invalid user")
        }
        res.json(user)
    }).catch((err) => res.status(500).json(err));
},
deleteFriend(req, res) {
    User.findByIdAndDelete({_id: req.params.id})
    .then((user) => {
        if (!user) {
            res.status(404).json("invalid user")
        }
        res.json(user)
    }).catch((err) => res.status(500).json(err));
}
};
