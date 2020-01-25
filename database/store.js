//Store and retrieve notes using the fs module.
//Do I need to make a notes array here? So that when a new note is saved
//on the req.body it gets added to this file(per the directions)
//Insert notes into this array

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
    constructor() {
        this.lastId = 0;
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
        const newNote = new Note(++this.lastId, note);
        // get your notes
        // update your notes
        // write your notes
    };
    deleteNote(id) {
        // delete a note with this id from the array
        // write the file
    };
};

// module.exports = new Store();

const a = new Store();
a.getNotes().then(data => console.log(data));


//     getNotes() {
//         fs.readFile('./db.json', (err, data) => {
//             if (err) throw err;
//             let getNotes = JSON.parse(data);
//             console.log(db);
//         });

// //should this variable be data or notInfo from apiRoutes?

//         console.log('getNotes is reading db.json');
//         //return all saved notes as json
//     }

//     postNotes(){

//     } 

//     storeNotes() {
//     }

//     // fs.readFileSync("db.json", JSON.parse()){
//     // }
//     addNotes() {
//         fs.writeFileSync("db.json", JSON.stringify(notes));
//     }
// }
// //addNotes()


