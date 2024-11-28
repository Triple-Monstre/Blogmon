import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-5 px-10">
      <div className="text-center">
        <p>&copy; 2045 Your Site Name. Designed by <a href="https://htmlcodex.com" className="text-blue-400">HTML Codex</a></p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-blue-700"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-pink-600"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;