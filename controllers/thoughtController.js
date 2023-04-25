const User = require('../models/User');
const Thought = require('../models/Thought');
// const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    getThoughts(req, res) {
      Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // Create a thought
    //example body
    /*
        {
        "username": "lernantino",
        "thoughtText": "blah blah blah!"
        }
    */
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
        });
    },
  };