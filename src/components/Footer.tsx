import React from "react";

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col max-md:items-center md:flex-row justify-between">
            <div className="mb-4 md:mb-0 max-md:text-center">
              <h2 className="text-lg font-semibold mb-2">About Us</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur urna sit amet</p>
            </div>
            <div className="mb-4 md:mb-0 max-md:text-center">
              <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm hover:text-gray-400">Home</a></li>
                <li><a href="#service" className="text-sm hover:text-gray-400">Services</a></li>
                <li><a href="#about" className="text-sm hover:text-gray-400">About</a></li>
                <li><a href="#faq" className="text-sm hover:text-gray-400">FAQs</a></li>
                <li><a href="#contact" className="text-sm hover:text-gray-400">Contact</a></li>
              </ul>
            </div>
            <div className="max-md:text-center">
              <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
              <p className="text-sm">1234 Main St, New York, NY 10001</p>
              <p className="text-sm">contact@example.com</p>
              <p className="text-sm">(123) 456-7890</p>
            </div>
          </div>
          <hr className="border-gray-600 my-4" />
          <div className="text-sm text-center">© 2024 Chandresh. All rights reserved.</div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  