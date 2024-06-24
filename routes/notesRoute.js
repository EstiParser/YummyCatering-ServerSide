const express = require('express');
const router = express.Router();
const { authenticateToken,authorizeRole } = require('../midlleware/authAdmin&User');
const notesController = require('../Controllres/notes.Controller');

router.use(authenticateToken);

router.get('/getNotes',authorizeRole('Reminds'),notesController.getNotes);//OK
router.post('/addNote',authorizeRole('user'),notesController.addNote);//OK

module.exports = router;
