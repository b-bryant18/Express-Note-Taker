const express = require("express");
const app = express ()
const PORT = process.env.PORT || 3000;
const apiRoutes = ("./apiRoutes");
const htmlRoutes = ("./htmlRoutes");

//Middleware -makes parsing objects that we get back easier for the browser to read.
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

//Home page of website
app.get('/', (req,res) => res.send('Hello world'))

//Use backticks for strings if you plan on using them as variables. ${PORT} will be filled in with a variable. 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}...`))

