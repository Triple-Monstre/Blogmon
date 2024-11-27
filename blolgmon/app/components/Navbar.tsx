import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-5 py-3">
      <div className="flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-500">BizNews</a>
        <ul className="hidden lg:flex space-x-5">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="/category" className="hover:text-red-400">Category</a></li>
          <li><a href="/single" className="hover:text-red-400">Single News</a></li>
          <li><a href="/contact" className="hover:text-red-400">Contact</a></li>
        </ul>
        <button className="lg:hidden bg-red-500 px-3 py-2 rounded">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;