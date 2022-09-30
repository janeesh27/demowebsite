import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import About from './components/About/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<Body />
			<Form />
		</>
	);
};

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
			<Footer />
		</>
	);
};

export default App;
