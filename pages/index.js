import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-center">
        <h1 className="text-5xl font-bold text-gray-900">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-800 mt-4 max-w-md">
          I'm Thrinadech Pittirawipas, a first-year Software Engineering student at Thammasat University, 
          aspiring to become a Full Stack Developer. Explore my projects and experiences below.
        </p>
        <div className="mt-6 flex flex-col space-y-4">
          <a href="/projects" className="bg-gray-900 text-white px-6 py-2 rounded shadow transition hover:bg-gray-800">
            View My Projects
          </a>
          <a href="/about" className="text-gray-900 hover:underline">
            Learn More About Me
          </a>
        </div>
      </div>
    </>
  );
}