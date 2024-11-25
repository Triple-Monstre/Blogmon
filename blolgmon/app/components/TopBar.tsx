import React from "react";

const TopBar = () => {
  return (
    <div className="hidden lg:block bg-gray-900 text-white">
      <div className="flex justify-between items-center px-10 py-2">
        <div className="flex space-x-4 text-sm">
          <a href="#" className="border-r border-gray-600 pr-4">Monday, January 1, 2045</a>
          <a href="#" className="border-r border-gray-600 pr-4">Advertise</a>
          <a href="#" className="border-r border-gray-600 pr-4">Contact</a>
          <a href="#">Login</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-blue-700"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-pink-600"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;