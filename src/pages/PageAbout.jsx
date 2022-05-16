export const PageAbout = ({books}) => {
	return (
		<div className="page_about">
			<h2>About</h2>
			<p>We would love you to join and make a suggestion for our book #{books.length + 1}.</p>
		</div>
	)
}