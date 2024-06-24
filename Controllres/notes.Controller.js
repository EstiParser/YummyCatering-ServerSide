const notesService = require('../service/noteService');

const getNotes = async (req, res) => {
    try {
        const notes = await notesService.getNotes();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get notes' });
    }
};

const addNote = async (req, res) => {
    try {
        await notesService.addNote(req.body);
        res.status(201).json({ message: 'Note added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add note' });
    }
};

module.exports = {
    getNotes,
    addNote
};