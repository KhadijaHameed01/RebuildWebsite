import React from 'react'
import { AboutSectionContent } from '../assests/constants'
import { motion } from "motion/react"
import Footer from './Footer'

const AboutSection = () => {
  return (
   <div className=' inset-0 -z-10 h-ful w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3e6_100%)]'>

      <div className="pt-4 mx-3">
            <h1 className="my-5 text-center text-4xl">
                About
                <span className="text-[#73ba9b]">Us</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center items-center"
                    >
                    <div className="flex justify-center items-center lg:justify-start ml-10 flex-col">
                        <p className="my-2 max-w-xl py-6 font-bold text-neutral-900 text-justify">{AboutSectionContent.descriptionBold}</p>
                        <p className="my-2 max-w-xl py-6 font-light text-neutral-900 text-justify font-sans">{AboutSectionContent.descriptionLight}</p>
                    </div>
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                    >
              <div className='border-none rounded-lg lg:w-1/2 md:w-[80vw] sm:w-full sm:m-5 object-cover ml-10 flex items-center justify-center'>
                <img src={AboutSectionContent.aboutImage} alt="About Section Image" className='rounded-lg w-[600px]'/>
              </div>
                </motion.div>
                <Footer/>
            </div>
    </div>
                  </div>
  )
}

export default AboutSection
