const Note = require('../../models/notes')

async function create(req, res, next) {
	// just for right now I want to see if this is connected
	console.log(req.body)
	try {
		const note = req.body.note
        note.owner = req.user._id
        await Note.create(req.body.note)
        .then((note) => {
            res.status(201).json({ note: note })
        })
		
	} catch (error) {
		res.status(400).json(error)
	}
}


async function read(req, res, next) {
    try {
        Note.find()
        .then((notes) => {
            return notes.map((note) => note)
        })
        .then((notes) => {res.status(200).json({ notes: notes })
    })
		
} catch (error) {
    res.status(400).json(error)
}
}

module.exports = {
    create,
    read,
}

