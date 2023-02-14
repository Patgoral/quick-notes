

export default function NoteCard({text, createdAt}) {
	return (
		<div className="NoteCard">
			<h2>{text}</h2>
			<p>{createdAt}</p>
		</div>
	)
}
