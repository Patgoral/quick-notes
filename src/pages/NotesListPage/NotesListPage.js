import { checkToken } from '../../utilities/users-services'
import NoteCard from '../components/NoteCard/NoteCard'

export default function NotesListPage({}) {
    

    async function handleCreateNote() {
        checkToken()
    }
    return (
        <>
   <h2>Notes List</h2>
   <input placeholder="Enter Note"></input>
   <button onClick={handleCreateNote}>Add Note</button>
   <NoteCard />
   </>
    )
}