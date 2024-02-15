import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <section className="relative h-[600px] sm:min-h-screen flex flex-col justify-center items-center ">
     
          <div className="absolute inset-0 z-0">
             <Image src="/main-bg-1.jpg" alt="Landing Page Image" layout="fill" objectFit="cover" />
             <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
          </div>
          <div className="relative z-10 text-center text-white">
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Embark on Our Global Wealth</h1>
             <p className="text-lg md:text-xl mb-8">Discover amazing features and services tailored for you</p>
             <Link href="/" passHref className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full shadow-lg uppercase tracking-wide hover:bg-blue-600 hover:text-white transition duration-300">
               Explore Now
             </Link>
          </div>
        </section>
  )
}

export default LandingPage