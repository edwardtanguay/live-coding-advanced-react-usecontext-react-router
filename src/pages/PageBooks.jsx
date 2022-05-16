import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageBooks = () => {
	const { books, setBooks } = useContext(AppContext);
	
	const handleDelete = (book) => {
		const _books = books.filter(m => m.id !== book.id);
		setBooks(_books);
	}

	const handleEdit = (book) => {
		book.title = book.title + ' - FINISHED';
		setBooks([...books]);
	}
	
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
								<div className="buttonArea">
									<button onClick={() => handleDelete(book)}>Delete</button>
									<button onClick={() => handleEdit(book)}>Edit</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
