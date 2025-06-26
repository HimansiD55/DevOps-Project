
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to My Elegant React Site</h1>
        <p className="text-gray-600 mb-6">
          This is a modern, responsive, and clean React app powered by Tailwind CSS.
        </p>
        <a 
          href="#"
          className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
}

export default App;


