"use client"
import Image from 'next/image'
import React, { useRef } from 'react'

interface SectionProps {
    id: string;
    title: string;
  }

const About :React.FC<SectionProps> = ({ id, title })=>{

    const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id={id} ref={sectionRef} className="flex flex-col  items-center mx-auto px-4 py-12 mb-16 pt-16 h-max">
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        We are a forward-thinking company dedicated to providing innovative solutions
        that meet the needs of our customers.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
      <div className="max-md:h-[300px] md:flex-1 flex items-center justify-center  relative md:h-[350px]">
        <Image src="/about.jpg" alt="Company" fill className="rounded-lg shadow-lg object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-center ">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to empower individuals and businesses with cutting-edge technologies
          and exceptional services, fostering growth and success in an ever-evolving world.
        </p>
      </div>
    </div>
  </section>
  )
}

export default About