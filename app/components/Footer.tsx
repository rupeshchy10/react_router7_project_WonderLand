import { Link } from "react-router";

export default function Footer() {
	return (
		<footer className="w-full h-16 bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 fixed bottom-0 left-0">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
				<Link to="https://github.com/rupeshchy10">
					<p className="text-lg">
						&copy; {new Date().getFullYear()} WonderLand. All rights
						reserved.
					</p>
				</Link>

				<nav className="flex space-x-6 text-lg">
					<a
						href="#"
						className="hover:text-yellow-300 transition-colors duration-300"
					>
						Privacy Policy
					</a>
					<a
						href="#"
						className="hover:text-yellow-300 transition-colors duration-300"
					>
						Terms of Service
					</a>
					<a
						href="#"
						className="hover:text-yellow-300 transition-colors duration-300"
					>
						Contact
					</a>
				</nav>
			</div>
		</footer>
	);
}
