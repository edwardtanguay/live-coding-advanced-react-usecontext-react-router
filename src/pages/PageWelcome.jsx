import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = ({ members }) => {
	const { siteTitle, books } = useContext(AppContext);

	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to {siteTitle}.</p>
			<p>
				We have {members.length} members in our club and we have read{' '}
				{books.length} books.
			</p>
		</div>
	);
};
