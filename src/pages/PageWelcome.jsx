export const PageWelcome = ({books, members, siteTitle}) => {
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to {siteTitle}.</p>
			<p>We have {members.length} members in our club and we have read {books.length} books.</p>
		</div>
	)
}