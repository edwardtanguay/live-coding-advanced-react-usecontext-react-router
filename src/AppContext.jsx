import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const bookUrl = 'https://edwardtanguay.netlify.app/share/books.json';
const memberUrl = 'https://edwardtanguay.netlify.app/share/employees.json';

export const AppProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const [members, setMembers] = useState([]);
	const siteTitle = 'The Online Book Club';

	useEffect(() => {
		(async () => {
			setBooks((await axios.get(bookUrl)).data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setMembers((await axios.get(memberUrl)).data);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				siteTitle,
				books,
				setBooks,
				members,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
