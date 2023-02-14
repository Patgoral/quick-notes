import { checkToken } from '../../utilities/users-services'

export default function NotesListPage() {
    

    async function handleCheckToken() {
        checkToken()
    }
    return (
        <>
   <h2>Notes List</h2>
   <input placeholder="Enter Note"></input>
   <button onClick={handleCheckToken}>Add Note</button>
   </>
    )
}