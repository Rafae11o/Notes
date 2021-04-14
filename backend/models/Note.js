const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    userId: {
        type: String, 
        require: true
    },
    header: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Note", NoteSchema);