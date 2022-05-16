import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooks } from './pages/PageBooks';
import { PageMembers } from './pages/PageMembers';
import { PageAbout } from './pages/PageAbout';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from './AppContext';

const memberUrl = 'https://edwardtanguay.netlify.app/share/employees.json';

function App() {
	const [members, setMembers] = useState([]);
	const { siteTitle } = useContext(AppContext);

	useEffect(() => {
		(async () => {
			setMembers((await axios.get(memberUrl)).data);
		})();
	}, []);

	return (
		<div className="App">
			<h1>{siteTitle}</h1>
			<hr />
			<NavLink to="/welcome">Welcome</NavLink> |{' '}
			<NavLink to="/books">Books</NavLink> |{' '}
			<NavLink to="/members">Members</NavLink> |{' '}
			<NavLink to="/about">About</NavLink>
			<hr />
			<Routes>
				<Route
					path="/welcome"
					element={<PageWelcome members={members} />}
				/>
				<Route path="/books" element={<PageBooks />} />
				<Route
					path="/members"
					element={<PageMembers members={members} />}
				/>
				<Route
					path="/about"
					element={<PageAbout members={members} />}
				/>
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
