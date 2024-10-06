import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const PageLayout = ({ pageName }) => {
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	return (
		<div className="relative min-h-screen flex items-center justify-center bg-theme-bg">
			<h1 className="absolute inset-0 flex items-center justify-center text-watermark-text text-[10vw] font-bold uppercase tracking-widest opacity-20">
				{pageName}
			</h1>
			<div className="z-10 text-center">
				<button
					onClick={toggleTheme}
					className="p-2 rounded-full bg-toggle-bg text-toggle-icon mb-5"
				>
					{isDarkMode ? (
						<Sun className="w-6 h-6" />
					) : (
						<Moon className="w-6 h-6" />
					)}
				</button>
				<h2 className="text-4xl font-bold mb-2 text-welcome-header">
					Welcome to the {pageName} Page
				</h2>
				<p className="text-xl text-welcome-paragraph">
					This is the {pageName} page of our MERN Developer app.
				</p>
			</div>
		</div>
	);
};

export default PageLayout;
