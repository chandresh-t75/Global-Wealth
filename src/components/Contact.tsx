"use client"
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';


interface SectionProps {
    id: string;
    title: string;
  }

const ContactSection :React.FC<SectionProps> = ({ id, title })=>{

    const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    requesterType: 'seller',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center "
      id={id} ref={sectionRef} 
    >
      <div className=" max-md:flex-1   max-w-6xl mx-auto lg:mr-8">
        <h2 className="text-3xl font-bold text-center lg:text-left text-gray-800 mb-8">Cultivate Connections</h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 "
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Your Phone Number with Country Code"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <select
              name="requesterType"
              value={formData.requesterType}
              onChange={handleChange}
              className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-block w-full bg-[#123352] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
      <div className="mt-8 mx-auto hidden md:flex max-w-md lg:ml-8 animate-pulse">
  <img
    src="/contact.jpg"
    alt="Contact Image"
    className="w-full h-max rounded-xl"
  />
</div>


    </motion.section>
  );
};

export default ContactSection;
