var router = require('express').Router();
var path = require('path');

//When the user is on the notes url, show them notes.html
router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});



module.exports = router;



