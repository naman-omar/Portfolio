"use client";
import { useTheme } from "../components/ThemeProvider";
import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import Link from 'next/link';

const Projects = () => {
    // taking out is darkmode
    const { isDarkMode, setIsDarkMode } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='projects' className='w-full max-w-full py-10 px-4 sm:px-8 md:px-[12%] scroll-mt-20'>
            {/* <h4 className='text-center mb-2 text-lg font-ovo'>Introduction </h4> */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>Technical Skills</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                 Experienced in Web Development, Data Structures & Algorithms (DSA), Machine Learning (ML) and Competitive Programming (CP). Proficient in building scalable applications, solving complex problems, and optimizing performance across various domains.
            </motion.p>

            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10'
            >
            {serviceData.map(({ icon, title, description, link }, index) => (
                <Link href={link} key={index} target="_blank">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`border border-gray-400 rounded-lg px-8 py-12 
                    h-[270px] w-full flex flex-col justify-start
                    cursor-pointer hover:-translate-y-1 duration-500
                    ${isDarkMode ? "hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#fff]" : "hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000]"}`}
                >
                    <Image src={icon} alt='' className='w-10' />
                    <h3 className={`text-lg my-4 ${isDarkMode ? "text-white" : "text-gray-700"}`}>{title}</h3>
                    <p className={`text-sm text-gray-600 leading-5 ${isDarkMode ? "text-white/80" : ""}`}>
                    {description}
                    </p>
                </motion.div>
                </Link>
            ))}
            </motion.div>
        </motion.div>
    )
}

export default Projects