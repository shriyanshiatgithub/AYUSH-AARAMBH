import React from 'react';

const NavBar: React.FC = () => {
  return (
    <header className="bg-green-900 shadow-lg py-3">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-white text-xl font-bold">Incubators</h1>
        <ul className="flex space-x-5">
          <li className="text-white hover:text-green-400 cursor-pointer">Startups</li>
          <li className="text-white hover:text-green-400 cursor-pointer">Mentors</li>
          <li className="text-white hover:text-green-400 cursor-pointer">Investors</li>
          <li className="text-white hover:text-green-400 cursor-pointer">Accelerators</li>
          <li className="text-white hover:text-green-400 cursor-pointer">Corporates</li>
          <li className="text-white font-bold">Incubators</li>
          <li className="text-white hover:text-green-400 cursor-pointer">Government Bodies</li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
