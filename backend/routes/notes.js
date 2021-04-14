const router = require("express").Router();
const Note = require("../models/Note");

router.get("/:userId", (req, res) => {
    Note.find({"userId": req.params.userId}, (err, result) => {
        if(err){
            res.json({success: false});
            throw err;
        }
        res.json({notes: result, success: true});
    });
});


router.post("/api/create", (req, res) => {
    let newNote = {
        userId: req.body.userId,
        header: req.body.header,
        text: req.body.text,
        date: req.body.date
    }
    Note.collection.insertOne(newNote, (err, result) => {
        if(err){
            res.json({success: false});
            throw err;
        }
        res.json({noteId: result.ops[0]._id, success: true});
    });
})

router.delete('/api/delete/:noteId', (req, res) => {
    Note.deleteOne({"_id": req.params.noteId}, (err, result) => {
        if(err){
            res.json({success: false});
            throw err;
        }
        res.json({success: true});
    });
})

router.put('/api/update', (req, res) => {
    let updatedNote = {
        userId: req.body.userId,
        header: req.body.header,
        text: req.body.text,
        date: req.body.date
    }
    Note.updateOne({"_id":req.body._id}, updatedNote, (err, result) => {
        if(err){
            res.json({success: false});
            throw err;
        }
        res.json({success: true});
    });
});

module.exports = router;