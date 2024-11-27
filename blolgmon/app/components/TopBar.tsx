import React from "react";

const TopBar = () => {
  return (
    <div className="hidden lg:block bg-purple-600 text-white">
      <div className="flex justify-between items-center px-10 py-2">
        <div className="flex space-x-4 text-sm">
          <a href="#" className="border-r border-black pr-5">Monday, January 1, 2045</a>
          <a href="#" className="border-r border-black pr-5">Advertise</a>
          <a href="#" className="border-r border-black pr-5">Contact</a>
          <a href="/login" className="text-gray-700 hover:text-blue-500">Login</a>
          <a href="#">Login</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;