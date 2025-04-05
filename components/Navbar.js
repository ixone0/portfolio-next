import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between">
      <h1 className="text-2xl font-bold text-gray-900">My Portfolio</h1>
      <div className="space-x-4">
        <Link href="/" className="text-gray-900 hover:text-gray-700">Home</Link>
        <Link href="/projects" className="text-gray-900 hover:text-gray-700">Projects</Link>
        <Link href="/about" className="text-gray-900 hover:text-gray-700">About</Link>
        <Link href="/contact" className="text-gray-900 hover:text-gray-700">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;