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
  }   
    
};
