const jsonStorage = require('../Develop/db/db.json');
var uniqid = require('uniqid');


module.exports = (app) =>{

    app.get('/api/notes',(req,res)=> res.json(notes));

    app.post('/api/notes', (req, res) => {
        const newEntry = req.body;
        jsonStorage.push(newEntry);
        jsonStorage.forEach((note) => {
            note.id = uniqid();
        });
        res.json(saveNote);// confused here                        and below here 
        fs.writeFile('../Develop/public/db/db.json', JSON.stringify(saveNote, null, 4), (err) => {
            if(err) {
                console.log(err);
            };
        });
    });


};














