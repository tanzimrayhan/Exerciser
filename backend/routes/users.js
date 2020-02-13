const router = require('express').Router();
let User = require('../models/userModel');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    console.log(req.body);
    console.log(username); 
    const newUser = new User({ username });
    console.log(newUser);
    newUser.save()
        .then(() => {
             return res.status(200).send("Saved")
            })
        .catch((err)=>{
            console.log("Hello from the error scope")
             return res.status(400).send.json('Error: '+err)});


})

module.exports=router;