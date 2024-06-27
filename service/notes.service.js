const Notes = require('../models/notes');

const getNotes = async () => {
    const notes = await Notes.find();
    return notes;
};

const addNote = async (noteData) => {
    const note = new Notes(noteData);
    await note.save();
    return note;
};

module.exports = {
    getNotes,
    addNote
};
