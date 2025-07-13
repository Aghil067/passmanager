import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-extrabold">
            <span className="text-green-600">&lt;</span>PassManager<span className="text-green-600">/&gt;</span>
          </div>
          <p className="text-sm mt-1">Your secure password manager</p>
          <p className="text-sm mt-1">Built with React and Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm mb-2">Follow me on:</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400 transition">GitHub</a>
            <a href="#" className="hover:text-green-400 transition">Twitter</a>
            <a href="#" className="hover:text-green-400 transition">LinkedIn</a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-2">
            <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition">Terms</a>
            <a href="#" className="hover:text-green-400 transition">Contact</a>
          </div>
          <p className="text-sm text-gray-400">© 2023 PassManager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
