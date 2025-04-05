import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-10 max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-lg text-gray-800 mb-6">
            I am a first-year Software Engineering student at Thammasat University, passionate about technology and aspiring to become a Full Stack Developer. I have experience in both game development and web applications, and I love creating projects that challenge my skills and expand my knowledge.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-3 text-gray-800 text-left">
            <li>✅ C#</li>
            <li>✅ HTML, CSS, JavaScript</li>
            <li>✅ React.js, Node.js</li>
            <li>✅ Next.js, Tailwind CSS</li>
            <li>✅ MySQL, PostgreSQL</li>
            <li>✅ Docker, GitHub</li>
            <li>✅ Unity (Game Development)</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Interests</h2>
          <p className="text-lg text-gray-800">
            I am passionate about exploring new technologies and enjoy engaging in sports, particularly volleyball. Additionally, I express my creativity through music by playing the guitar and singing. My objective is to continuously expand my knowledge and enhance my skills in software development.
          </p>
        </div>
      </div>
    </>
  );
}