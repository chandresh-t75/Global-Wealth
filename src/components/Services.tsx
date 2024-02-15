"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

import AOS from 'aos';

interface SectionProps {
    id: string;
    title: string;
  }

const Services :React.FC<SectionProps> = ({ id, title })=>{

    const sectionRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200, // Adjust the offset as needed
        });
    }, []);
 
  return (
    <section id={id} ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div data-aos="fade-up" className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card 1 */}
          <div  data-aos="fade-up" className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105  hover:shadow-xl transition-all duration-200">
            <div className="h-40 relative">
              <Image src="/service1.jpg" alt="Property Sales" layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Sales</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div  data-aos="fade-up" className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105  hover:shadow-xl transition-all duration-200">
            <div className="h-40 relative">
              <Image src="/service2.jpg" alt="Investment Consultation" layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Investment Consultation</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105  hover:shadow-xl transition-all duration-200">
            <div className="h-40 relative">
              <Image src="/service3.jpg" alt="Market Research" layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Research</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105  hover:shadow-xl transition-all duration-200">
            <div className="h-40 relative">
              <Image src="/service4.jpg" alt="UAE Golden Visa Program" layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UAE Golden Visa Program</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services