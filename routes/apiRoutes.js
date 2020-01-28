const dbfile = require('../database/store');
//path to storage goes after require (path needs to be a string)
const router = require('express').Router();

//Routes
router.get("/notes", function (req, res) {
    dbfile
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))

})
//does this bracket need to encompass router.post and router.delete?

router.post("/notes", function (req, res) {
    dbfile
        .addNotes(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err))
})

router.delete("/notes/:id", function (req, res) {
    dbfile.deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;