const express = require('express');
const router = express.Router();
const noteController = require('../Controllres/notes.Controller');



router.get('/',noteController.getNotes);
router.post('/addNote',noteController.addNote);

module.exports = router;