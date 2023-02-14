import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import NewNotePage from '../NewNotePage/NewNotePage'
import NotesListPage from '../NotesListPage/NotesListPage'

import { getUser } from '../../utilities/users-services'

function App() {
	const [user, setUser] = useState(getUser())
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch('/api/notes', {
			headers: {Authentication: 'Bearer {token}'}
	})
		.then((res) => res.json())
		.then((json) => console.log(json))
	}, [])

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
					<Route path="/" element={<NotesListPage />}/>
						<Route path="/notes/new" element={<NewNotePage />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} user={user} />
			)}
		</main>
	)
}

export default App

