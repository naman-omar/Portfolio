"use client";
import { useTheme } from "../components/ThemeProvider";
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {

    // taking out is darkmode
    const { isDarkMode, setIsDarkMode } = useTheme();


    return (
        <div className='mt-20 '>
            <div className='text-center'>
                <Image src={isDarkMode?assets.logo_dark: assets.logo} alt='' className='w-36 mx-auto mb-2 invisible ' />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt='' className='w-6 ' />
                    namanknp13@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '>
                <p>© 2025 Naman Omar. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='blank' href="https://www.geeksforgeeks.org/user/namankmeu9/">GeeksForGeeks</a></li>
                    <li><a target='blank' href="https://codeforces.com/profile/Naman_omar">Codeforces</a></li>
                    <li><a target='blank' href="https://github.com/naman-omar">GitHub</a></li>
                    <li><a target='blank' href="https://www.linkedin.com/in/naman-omar-a54877259/">Linkedln</a></li>
                    <li><a target='blank' href="https://leetcode.com/u/namanknp13/">Leetcode</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer