import { NavLink } from "react-router";

export default function Navbar() {
	return (
		<header className="fixed top-0 left-0 w-full z-50 h-16 bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md py-4">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
				<NavLink to="/" className="text-3xl font-extrabold mb-4 md:mb-0 hover:scale-105 transition">
					Wonder<span className="text-yellow-300">Land</span>
				</NavLink>
				<nav className="flex space-x-6 text-lg">
					<NavLink
						to="/"
						end
						className={({ isActive }) =>
							`hover:text-yellow-300 transition-colors duration-300 ${
								isActive ? "text-yellow-300" : "text-white"
							}`
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/countries"
						className={({ isActive }) =>
							`hover:text-yellow-300 transition-colors duration-300 ${
								isActive ? "text-yellow-300" : "text-white"
							}`
						}
					>
						Countries
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							`hover:text-yellow-300 transition-colors duration-300 ${
								isActive ? "text-yellow-300" : "text-white"
							}`
						}
					>
						About
					</NavLink>
				</nav>
			</div>
		</header>
	);
}