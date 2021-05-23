const jsonStorage = require('../db/db.json');
var uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');


module.exports = (app) =>{

    app.get('/api/notes',(req,res)=> res.json(jsonStorage));

    app.post('/api/notes', (req, res) => {
        const newEntry = req.body;
        jsonStorage.push(newEntry);
        jsonStorage.forEach((note) => {
            note.id = uniqid();
        });
        res.json(jsonStorage);
        
        fs.writeFile('..db/db.json', JSON.stringify(jsonStorage), (err) => {
            if(err) {
                console.log(err);
            };
        });
    });


};














