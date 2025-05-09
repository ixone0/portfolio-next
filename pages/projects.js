import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const fullStackProjects = [
    { 
      title: "Restaurant Management System",
      description: "Full-Stack restaurant management system with Next.js, PostgreSQL, and WebSocket. role-based access control (RBAC), employee management, and real-time updates for kitchen and cashier systems",
      github: "https://github.com/ixone0/restaurant_management",
      image: "/images/restaurant-management.png",
    },
    {
      title: "TodoList React",
      description: "A simple todo app using React and MySQL.",
      github: "https://github.com/ixone0/todo-react",
      image: "/images/todolist.png",
    },
    {
      title: "User Management System with docker",
      description: "Full-Stack user management system with React, MySQL, and Docker.",
      github: "https://github.com/ixone0/user-management-with-docker",
      image: "/images/user-management.png",
    },
    {
      title: "Portfolio",
      description: "My Portfolio with Next.js, Tailwind CSS, and deployed on Vercel.",
      github: "https://github.com/ixone0/portfolio-next",
      image: "/images/portfolio.png",
    },
  ];

  const gameProjects = [
    {
      title: "Freelance Game Project",
      description: "A game development project for a client, developed over 2 months. (2D)",
      github: "https://github.com/ixone0/2D-Tea",
      itch: "https://ingg1.itch.io/teatea123",
      image: "/images/freelance-game.png",
    },
    {
      title: "Hackathon Game #1",
      description: "Won 1st place in a 5-day game development competition. (3D)",
      github: "https://github.com/CEC-Project-Game/game",
      itch: "https://gripenyukiainen.itch.io/fears-of-asuka",
      image: "/images/hackathon1.png",
    },
    {
      title: "Hackathon Game #2",
      description: "Another 1st place winning project from a game jam event. (2D)",
      github: "https://github.com/SkyLinepi/game-jam-4",
      itch: "https://skyzazas2.itch.io/pong-tai",
      image: "/images/hackathon2.png",
    },
    {
      title: "3-Month Game Project",
      description: "A team game project developed over 3 months. (3D)",
      github: "https://github.com/ixone0/project-Ducky",
      itch: "https://ixone0.itch.io/ducky-land",
      image: "/images/3month-game.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-10 bg-gray-200">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 bg-gray-300 p-4 rounded shadow">Projects</h1>
        
        {/* Full-Stack Projects */}
        <h2 className="text-3xl font-semibold mt-6 text-gray-900">Full-Stack Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {fullStackProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Game Projects */}
        <h2 className="text-3xl font-semibold mt-10 text-gray-900">Game Development</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {gameProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}