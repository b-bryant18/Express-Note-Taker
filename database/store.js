//function for reading notes 
const fs = require('fs');
const util = require('util');
//const db = require('db.json');

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
    //put variables in the constructor
    constructor() {
        this.lastId = 0;
    }
    read(){
return readFileAsync("/db.json", "utf8");
    };
    write(note){
return writeFileAsync("/db.json", JSON.stringify(note));
    };
    getNotes(){};
    addNotes(note){};
    deleteNote(id){};
};

module.exports = new Store();


//     getNotes() {
//         fs.readFile('./db.json', (err, data) => {
//             if (err) throw err;
//             let getNotes = JSOn.parse(data);
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


