import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-5 px-10">
      <div className="text-center">
        <p>&copy; 2045 Your Site Name. Designed by <a href="https://htmlcodex.com" className="text-blue-400">HTML Codex</a></p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://x.com/LoL_France?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
            <img src="img/1725374683twitter-x-logo.png" alt="Twitter" className="w-8 h-8"/>
          </a>
          <a href="https://www.instagram.com/leagueoflegendsfr/?hl=fr" target="_blank">
            <img src="img/instagram_icon_large.png" alt="Instagram" className="w-8 h-8"/>
          </a>
          <a href="https://www.facebook.com/LeagueOfLegendsFROfficial/?locale=fr_FR" target="_blank">
            <img src="img/images.png" alt="Facebook" className="w-8 h-8"/>
          </a>
          <a href="https://www.linkedin.com/in/bruno-dernier-604a971/" target="_blank">
            <img src="img/4096186.png" alt="LinkedIn" className="w-8 h-8"/>
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;