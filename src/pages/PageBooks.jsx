export const PageBooks = ({ books }) => {
	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>We have read these books:</p>
			<div className="books">
				{books.map((book, index) => {
					return (
						<div className="book" key={index}>
							<div className="title">{book.title}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
