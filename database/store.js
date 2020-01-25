//function for reading notes 
const fs = require('fs');
const db = require('db.json');

//Make a class constructor function to store notes with getNotes() and addNotes() inside of it
class Storage {
    //put variables in the cconstructor
    constructor() {
    }
    getNotes() {
        fs.readFile('./db.json', (err, data) => {
            if (err) throw err;
            let getNotes = JSOn.parse(data);
            console.log(db);
        });
//should this variable be data or notInfo from apiRoutes?


        console.log('getNotes is reading db.json');
        //return all saved notes as json
    }

    postNotes(){

    } 

    storeNotes() {
    }
    
    // fs.readFileSync("db.json", JSON.parse()){
    // }
    addNotes() {
        fs.writeFileSync("db.json", JSON.stringify(notes));
    }
}
//addNotes()



module.exports = {
    //name of class constructor function  
}




module.exports = {
    //name of class constructor function  
}

