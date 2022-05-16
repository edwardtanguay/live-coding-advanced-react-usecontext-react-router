export const PageAbout = ({books, members}) => {
	return (
		<div className="page_about">
			<h2>About</h2>
			<p>We would love you to become member #{members.length + 1} and make a suggestion for our book #{books.length + 1}.</p>
		</div>
	)
}