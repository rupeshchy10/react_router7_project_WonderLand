export default function About() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold mb-6">🌍 Explore the World with Us</h1>
        <p className="text-xl leading-relaxed mb-6">
          Welcome to <span className="font-bold text-yellow-300">Country Explorer</span>! We bring you a vast collection of information about nations worldwide using the
          <span className="font-semibold text-yellow-300"> REST Countries API </span>. Discover fascinating insights and expand your knowledge.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-lg text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">🌟 What You Can Discover</h2>
          <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
            <li>📌 Country names, capitals, and regions</li>
            <li>📊 Population statistics and geographical details</li>
            <li>🏳️ National flags and cultural symbols</li>
            <li>🌍 Interactive maps and real-time updates</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed mt-6">
          Our mission is to create a fully responsive, feature-rich, and engaging platform. Built with modern technologies like
          <span className="font-semibold text-yellow-300"> React Router v7 </span> for smooth navigation and <span className="font-semibold text-yellow-300"> Tailwind CSS </span> for a sleek, adaptive interface.
        </p>
        <div className="mt-6 bg-white p-6 rounded-xl shadow-lg text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">🚀 Future Enhancements</h2>
          <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
            <li>🗺️ More interactive maps with live data</li>
            <li>💬 User-contributed content and discussions</li>
            <li>📡 Real-time updates on global trends</li>
            <li>🔍 Advanced search and filtering options</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed mt-6">
          We are always evolving! Stay connected and let us know how we can improve. Thank you for visiting our platform! 🌎💙
        </p>
      </div>
    </div>
  );
}