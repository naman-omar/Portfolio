"use client";
import { useTheme } from "../components/ThemeProvider";
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

const Contact = () => {

    // taking out is darkmode
    const { isDarkMode, setIsDarkMode } = useTheme();

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9573b4e4-3326-4136-856a-421fb9727c94");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' className={`w-full max-w-full py-10 px-4 sm:px-8 md:px-[12%] scroll-mt-20
         bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto ] ${isDarkMode ? "bg-none" : ""}`}>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-ovo'>Connect With Me</motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-ovo'>Get in Touch</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto '>
                <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8'>

                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        type="text" placeholder="Your Name" required
                        className={`flex-1 p-3 outline-none border-[0.5px]  rounded-md  ${isDarkMode ? "bg-[rgba(42,0,74,0.3)] border-white" : "bg-white border-gray-400"}`} name='name' />

                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        type="email" placeholder="Your Email" required
                        className={`flex-1 p-3 outline-none border-[0.5px] rounded-md  ${isDarkMode ? "bg-[rgba(42,0,74,0.3)] border-white " : "border-gray-400 rounded-md bg-white"} `} name='email' />

                </div>
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    rows='6' placeholder='Enter your message' required
                    className={`w-full p-4 outline-none border-[0.5px] rounded-md ${isDarkMode ? "bg-[rgba(42,0,74,0.3)] border-white " : "border-gray-400  bg-white"}  mb-6`} name='message'></motion.textarea>

                <motion.button
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}
                    type='submit' className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto duration-500 
                    ${isDarkMode ? "bg-transparent border-[0.5px] hover:bg-[#2a004a]" : " hover:bg-[#2a004a]  bg-black/80  text-white "}`}> Submit Now
                    <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.button>
                <p className='mt-4 '>{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact