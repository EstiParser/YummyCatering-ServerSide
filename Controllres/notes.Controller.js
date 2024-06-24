const notes = require('../models/notes');

const getNotes  = ( async (req, res) => {
    const note = await notes.find();
    res.status(200).json(note);
});

const addNote = ( async (req, res) => {
    const note = new notes(req.body);
    note.save();
    res.status(200).json({ message: 'The note have been successfully updated', note });
});
module.exports = 
{
    getNotes,
    addNote
};