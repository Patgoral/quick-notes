import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import NewNotePage from '../NewNotePage/NewNotePage'
import NotesListPage from '../NotesListPage/NotesListPage'

import { getUser } from '../../utilities/users-services'

function App() {
	const [user, setUser] = useState(getUser())

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
						<Route path="/notes/new" element={<NewNotePage />} />
                        <Route path="/" element={<NotesListPage />}/>
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} user={user} />
			)}
		</main>
	)
}

export default App

