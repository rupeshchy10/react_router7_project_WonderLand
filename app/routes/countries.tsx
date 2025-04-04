import { Link } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries = loaderData.filter((country: any) => {
    const matchesRegion =
      !region || country.region.toLowerCase() === region.toLowerCase();
    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="p-8 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen text-white">
      <h2 className="text-4xl font-extrabold mb-6 text-center">🌍 Explore Countries</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
        <input
          type="text"
          placeholder="🔍 Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-1/2 text-gray-900 focus:outline-none focus:border-yellow-400 shadow-md"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-1/2 text-gray-900 focus:outline-none focus:border-yellow-400 shadow-md"
        >
          <option value="">🌎 All Regions</option>
          <option value="africa">🌍 Africa</option>
          <option value="americas">🌎 Americas</option>
          <option value="asia">🌏 Asia</option>
          <option value="europe">🌍 Europe</option>
          <option value="oceania">🌊 Oceania</option>
        </select>
      </div>

      {filteredCountries.length === 0 ? (
        <div className="text-center text-lg font-semibold">⚠️ No countries match your filters.</div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map((country: any) => (
            <li
              key={country.cca3}
              className="bg-white text-gray-900 border border-gray-200 rounded-xl p-5 shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <Link
                to={`/countries/${country.name.common}`}
                className="text-blue-600 hover:text-blue-800 text-xl font-semibold"
              >
                {country.name.common}
              </Link>
              <div className="mt-2">
                <p className="text-gray-700 text-sm">🌍 Region: {country.region}</p>
                <p className="text-gray-700 text-sm">👥 Population: {country.population.toLocaleString()}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}