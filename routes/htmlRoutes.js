var router = require('express').Router();
var path = require('path');

router.get('/notes', function(req,res) {
res.sendFile(path.join(__dirname, '../public/notes.html')) 
})

//The * is the catch all for all other routes that will take the user to the home page
router.get('*', function(req,res) {
res.sendFile(path.join(__dirname,`../public/index.html`))
})

module.exports = router;
