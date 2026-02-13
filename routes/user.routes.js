const express = require('express');
const router = express.Router();

// router.get('/test', (req, res) => {
//     res.send('user test route');
// });
router.get('/register', (req, res) => {
    res.render('register');
});
router.post('/register', (req, res) => {
    // Handle registration logic here
    console.log(req.body); // Log the form data to the console
    res.send('User registered successfully!');
});
module.exports = router;