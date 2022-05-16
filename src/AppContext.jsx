import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const bookUrl = 'https://edwardtanguay.netlify.app/share/books.json';

export const AppProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const siteTitle = 'The Online Book Club';

	useEffect(() => {
		(async () => {
			setBooks((await axios.get(bookUrl)).data);
		})();
	}, []);

	return (
		<AppContext.Provider value={{
			siteTitle,
			books,
			setBooks
		}}>
			{children}
		</AppContext.Provider>
	)

};