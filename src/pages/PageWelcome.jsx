export const PageWelcome = ({books, members}) => {
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>
			<p>We have {members.length} members in our club and we have read {books.length} books.</p>
		</div>
	)
}