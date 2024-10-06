import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReactPage from './pages/ReactPage';
import TailwindPage from './pages/TailwindPage';
import ExpressPage from './pages/ExpressPage';
import MongoDBPage from './pages/MongoDBPage';

function App() {
	return (
		<ThemeProvider>
			<Router>
				<div className="min-h-screen">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/react" element={<ReactPage />} />
						<Route path="/tailwind" element={<TailwindPage />} />
						<Route path="/express" element={<ExpressPage />} />
						<Route path="/mongodb" element={<MongoDBPage />} />
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
