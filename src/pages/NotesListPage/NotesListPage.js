import NoteCard from '../components/NoteCard/NoteCard'
import React from 'react'
import { useState, useEffect } from 'react'
import { create, read } from '../../utilities/notes-api'

export default function NotesListPage({user}) {
    const [text, setText] = useState('')
    const [notes, setNotes] = useState(null)

    useEffect(function effectFunction() {
        async function getNotes() {
            const userNotes = await read(user._id)
            setNotes(userNotes)
        }
        getNotes()
    }, [user._id])

    function handleChange(e) {
        setText(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const note = {text, user: user._id}
        const res = await create(note)
        setNotes([...notes, res])
    }

    return (
        <>
   <h2>Notes List</h2>
   <form onSubmit={handleSubmit}>
   <textarea onChange={handleChange} value={text} placeholder="Enter Note"></textarea>
   <button>Submit</button>
   </form>
   <div className="notes-container">
    {notes && notes.map((note, index) => (
         <NoteCard text={note.text} createdAt={note.createdAt} key={index} />
    ))}
  

   </div>
   
   </>
    )
}