const dbfile = require('../database/store');
//path to storage goes after require (path needs to be a string)
const router = require('express').Router();

//Routes
router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))

},
//does this bracket need to encompass router.post and router.delete?

    router.post("/notes", function (req, res) {
        store
            .addNotes(req.body)
            .then((note) => res.json(note))
            .catch(err => res.status(500).json(err))
    }),

    router.delete("/notes/:id", function (req, res) {
        store.deleteNote(req.params.id)
            .then(() => res.json({ ok: true }))
            .catch(err => res.status(500).json(err))
    })

    //Do I need to export router?
module.exports = function(router);
