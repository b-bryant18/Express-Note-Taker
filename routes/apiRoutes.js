const dbfile = require('../database/store');
//path to storage goes after require (path needs to be a string)
const router = require('express').Router();

//Routes
// CHECK THIS
router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))

},

// //GET /api/notes - Should read the db.json file and return all saved notes as JSON
// //Needs to talk to db.json
// app.get("/api/notes", function(req, res) {
//     //res.readFile(path.join(__dirname, ""))
//     res.json([]);
// })


// ***ASK IF THIS IS CORRECT
//POST /api/notes - Should recieve a new note to save on the request body, add it 
//to the db.json file, and then return the new note to the client.
router.post("/notes", function(req, res) {
    store
        .addNotes(req.body)
        .then()
        .catch(err => res.status(500).json(err))
})

//DELETE /api/notes/:id - Should recieve a query paramter containing the id of a 
//note to delete. This means you'll need to find a way to give each note a unique 
//id when it's saved. In order to delete a note, you'll need to read all notes from
//the db.json file, remove the note with the given id property, and then rewrite 
//the notes to the db.json file.

//Need to make an array called notes
