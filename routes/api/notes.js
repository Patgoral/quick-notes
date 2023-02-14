const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const notesCtrl = require('../../controllers/api/notes')


// INDEX
router.get('/', ensureLoggedIn, notesCtrl.read)



// CREATE
router.post('/', ensureLoggedIn, notesCtrl.create) 

module.exports = router
