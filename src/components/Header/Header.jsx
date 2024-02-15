import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="shadow sticky z-50 top">
			<nav className="bg-slate-500 h-full">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<Link to="/">
						<img
							className="h-12 mr-4"
							src="https://w7.pngwing.com/pngs/684/254/png-transparent-checklist-todo-list.png"
							alt="Todo Picture"
						/>
					</Link>
					<div className="flex items-center lg:order-2">
						<Link to="/simple-todo">Github</Link>
					</div>
					<div
						className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
						id="mobile-menu-2"
					>
						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							<li>
								{' '}
								<NavLink
									to="/"
									className={({ isActive }) =>
										`${
											isActive ? 'text-orange-500' : 'text-white-500'
										} block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								{' '}
								<NavLink
									to="/simple-todo"
									className={({ isActive }) =>
										`${
											isActive ? 'text-orange-500' : 'text-white-500'
										} block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									Simple-Todo
								</NavLink>
							</li>
							<li>
								{' '}
								<NavLink
									to="/todo"
									className={({ isActive }) =>
										`${
											isActive ? 'text-orange-500' : 'text-white-500'
										} block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									Todo
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
