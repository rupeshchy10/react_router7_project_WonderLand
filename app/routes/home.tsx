import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wonderer" },
    { name: "Check out country data!", content: "Welcome to Wonderer." },
  ];
}

export default function Home() {
  return (
    <div className="px-4 py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white md:px-0">
      <div className="container items-center max-w-6xl mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="space-y-6 sm:max-w-md lg:max-w-lg">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                <span className="block xl:inline">Explore Countries with</span>
                <span className="block text-yellow-300 xl:inline"> Real-Time Data</span>
              </h1>
              <p className="mx-auto text-lg text-white sm:max-w-md lg:text-xl">
                Discover details about every country around the world – from
                capitals to regions and beyond!
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <Link
                  to="/countries"
                  className="flex items-center justify-center px-6 py-3 text-lg text-white bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500 transition hover:scale-105"
                >
                  Explore Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center px-6 py-3 text-white bg-gray-800 rounded-lg shadow-lg hover:bg-red-900 transition hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://t4.ftcdn.net/jpg/12/68/25/45/360_F_1268254540_nIvQcqB3IEbWPxu5aTMGS0D75G0wFI73.jpg"
                alt="Explore countries"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}