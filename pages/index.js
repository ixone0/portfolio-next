import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-md">
           at Thammasat University, 
          aspiring to become a Full Stack Developer. Explore my projects and experiences below.
        </p>
        <div className="mt-6 flex flex-col space-y-4">
          <a href="/projects" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
            View My Projects
          </a>
          <a href="/about" className="text-blue-500 hover:underline">
            Learn More About Me
          </a>
        </div>
      </div>
    </>
  );
}