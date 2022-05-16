import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const siteTitle = 'nnn';

	return (
		<AppContext.Provider value={{
			siteTitle
		}}>
			{children}
		</AppContext.Provider>
	)

};