// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Sumit Pandey</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Connect</Link>
        <Link to="/blog">Blogs</Link>
      </div>
    </nav>
  );
}
