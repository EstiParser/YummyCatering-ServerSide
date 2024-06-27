const notesService = require('../Service/notes.service');

const getNotes = async (req, res) => {
    try {
        const notes = await notesService.getNotes();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving notes', error });
    }
};

const addNote = async (req, res) => {
    try {
        const note = await notesService.addNote(req.body);
        res.status(200).json({ message: 'The note has been successfully added', note });
    } catch (error) {
        res.status(500).json({ message: 'Error adding note', error });
    }
};

module.exports = {
    getNotes,
    addNote
};
