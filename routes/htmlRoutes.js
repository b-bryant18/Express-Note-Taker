var router = require('express').Router();
var path = require('path');

module.exports = function(app) {

router.get('/notes', function(req,res) {
res.sendFile(path.join(__dirname, '../public/notes.html')) 
})

//The * is the catch all for all other routes that will take the user to the home page
router.get('/index', function(req,res) {
res.sendFile(path.join(__dirname,`../public/index.html`))
})

}



