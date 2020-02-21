const router = require('express').Router();
let User = require('../models/userModel');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    
    
    const newUser = new User({ username });
    console.log(newUser);
    User.create(newUser)
        .then(() => {
            return res.status(200).send({ message: "Saved" })
        })
        .catch((err) => {
            return res.status(400).send.json('Error: ' + err)
        });


})

module.exports = router;