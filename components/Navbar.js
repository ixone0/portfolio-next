import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link href="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
