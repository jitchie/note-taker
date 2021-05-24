var jsonStorage = require('../db/db.json');
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
        
        fs.writeFile('db/db.json', JSON.stringify(jsonStorage, null, 4), (err) => {
            if(err) {
                console.log(err);
            };
        });
    });

    app.delete('/api/notes/:id',(req,res)=>{
        const id = req.params.id;
        console.log('id string',id);
        console.log("string",jsonStorage);
        var newArr = jsonStorage.filter(notes => notes.id !=id);
        console.log("new string",newArr);
        jsonStorage = newArr;
            fs.writeFile('db/db.json', JSON.stringify(jsonStorage), (err) => {
                if(err) {
                    console.log(err)
                }
            })
            res.json(jsonStorage);
})



};

















