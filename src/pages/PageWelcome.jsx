export const PageWelcome = ({books}) => {
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>
			<p>We have read {books.length} books.</p>
		</div>
	)
}