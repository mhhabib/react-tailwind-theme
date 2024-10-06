import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const navItems = ['home', 'react', 'tailwind', 'express', 'mongodb'];
	return (
		<nav className="bg-theme-bg text-navigation-text p-4">
			<ul className="flex justify-center space-x-6">
				{navItems.map((item) => (
					<li key={item}>
						<Link
							to={item === 'home' ? '/' : `/${item}`}
							className="hover:text-navigation-text-hover transition duration-300"
						>
							{item.charAt(0).toUpperCase() + item.slice(1)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
