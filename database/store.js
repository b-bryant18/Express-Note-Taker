//Store and retrieve notes using the fs module.

//function for reading notes 
const fs = require('fs');
const Note = require("./note");
const path = require('path');
const util = require('util');
//const db = require('db.json');

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
    //put variables in the constructor
    // Looks through all notes and finds highest id. Then new note will have the next higher id. (even when server restarts)
    constructor() {
        this.lastId = 0;
        this.getNotes().then((notes) => {
            for (var i = 0; i < notes.length; i++) {
                if (notes[i].id > this.lastId) {
                    this.lastId = notes[i].id;
                }
            }
        })
    }
    read() {
        return readFileAsync(path.join(__dirname, "db.json"), "utf8");
    };
    write(note) {
        return writeFileAsync(path.join(__dirname, "db.json"), JSON.stringify(note));
    };
    getNotes() {
        //this.read().then(dbObject => console.log(dbObject));
        return this.read().then(dbString => JSON.parse(dbString));
    };
    addNotes(note) {
        // write these notes into the file
        const newNote = new Note(++this.lastId, note.text, note.title);
        // get your notes
        return this.getNotes().then((notes) => {
            // update your notes
            notes.push(newNote)
            // write your notes
            this.write(notes)
            return newNote
        })
    };
    //Tells array, notes, to delete one note. Then rewrites the array. FInd the note with the id that the user gave you. (if statement) Tests element.id matches the id the user gave. The id that's after  
    deleteNote(id) {
        return this.getNotes().then((notes) => {
            for (let index = 0; index < notes.length; index++) {
                const element = notes[index];
                if (element.id == id) {
                    notes.splice(index, 1)
                }
            } this.write(notes)
        })
    };
};

module.exports = new Store();




