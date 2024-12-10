import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-5 py-3">
      <div className="flex justify-between items-center">
        <a href="/home" className="text-2xl font-bold text-blue-500">Blogmon</a>
        <ul className="hidden lg:flex space-x-5">
          <li><a href="/home" className="hover:text-blue-400">Home</a></li>
          <li><a href="/Recherche" className="hover:text-red-400">Recherche</a></li>
          <li><a href="/Actualite" className="hover:text-red-400">Actualité</a></li>
        </ul>
        <button className="lg:hidden bg-red-500 px-3 py-2 rounded">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;