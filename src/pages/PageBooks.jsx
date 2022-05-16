export const PageBooks = ({ books }) => {
	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>We have read these books:</p>
			<div className="books">
				{books.map((book, index) => {
					return (
						<div className="book" key={index}>
							<img
								src={`https://edwardtanguay.netlify.app/share/images/books/${book.idcode}.png`}
								alt="book cover"
							/>
							<div className="info">
								<div className="title">{book.title}</div>
								<div className="description">
									{book.description}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
