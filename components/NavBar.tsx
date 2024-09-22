'use client'

import { motion } from 'framer-motion';
import { useRef, useState } from "react";
import React from 'react'
import Link from 'next/link'
type elementsMiddle = {
    title: string,
    link: string,
}
export default function NavBar() {



    const [menuOpen, setMenuOpen] = useState(false);
    const middleMenu: elementsMiddle[] = [
        {
            title: "Home",
            link: "#",
        },
        {
            title: "About Us",
            link: "#",
        },
        {
            title: "Services",
            link: "#",
        },
        {
            title: "GPT HOUSE",
            link: "#",
        },
    ]
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track hovered index
    const [hoverPosition, setHoverPosition] = useState({ left: 0, width: 0 }); // Track position and width
    const containerRef = useRef<HTMLDivElement>(null); // Ref for the entire container
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]); // Refs for each link

    // Update the hover background position and size when hovering over a link
    const handleMouseEnter = (index: number) => {
        const linkElement = linkRefs.current[index];
        if (linkElement && containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const linkRect = linkElement.getBoundingClientRect();

            setHoverPosition({
                left: linkRect.left - containerRect.left,
                width: linkRect.width,
            });

            setHoveredIndex(index); // Update hovered index
        }
    };
    // Reset background when the mouse leaves
    const handleMouseLeave = () => {
        setHoveredIndex(null); // No link hovered
    };


    // framer motion animation for mobile 

    const menuVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: 'auto',
            opacity: 1,
            transition: {
                duration: 0.4,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };
    return (
        <>
            <nav className="bg-[#ede7e2] border-b border-gray-200 relative">
                <div className="max-w-[95%] mx-auto px-4  sm:px-6 lg:px-8">
                    <div className="text-[1.2vw] flex relative items-center justify-between py-4">
                        {/* Left Section - Logo */}
                        <div className="flex font-[Limelight]  items-center space-x-4">
                            <div className="text-black font-bold text-[4vw] md:text-[1.8vw] lg:text-[1.8vw]">
                                <Link href="/" className="flex items-center">
                                    <span className="">Flemingo</span>
                                </Link>
                            </div>
                        </div>

                        {/* Center Section - Links */}
                        <div
                            className="hidden absolute left-1/2 border-[1px] border-black rounded-full transform -translate-x-1/2  lg:flex md:flex  justify-center"
                            ref={containerRef}
                        >
                            <div
                                className="absolute bg-black h-full rounded-full transition-all duration-300 ease-in-out z-0"
                                style={{
                                    left: `${hoverPosition.left}px`,
                                    width: `${hoverPosition.width}px`,
                                    opacity: hoveredIndex !== null ? 1 : 0, // Show background when hovered
                                }}
                            />
                            {middleMenu.map((item, index) => (
                                <Link
                                    href={item.link}
                                    key={index}
                                    ref={(el) => {
                                        linkRefs.current[index] = el
                                    }} // Assign refs to each link
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                    className="text-gray-700 px-[1.3vw] py-[.7vw] relative z-10 hover:text-white transition-all duration-300 ease-in-out"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        {/* Right Section - Login and Button */}
                        <div className="hidden lg:flex md:flex items-center space-x-4 justify-end">
                            {/* LOGIN button */}
                            <button className="relative  gap-2 py-2.5  px-5 flex justify-between items-center bg-white cursor-pointer border-[1px] border-black rounded-full  transition-all duration-250 ease-in-out group overflow-hidden">
                                <div className=" absolute  bg-black top-0 left-[-100%] group-hover:left-0 duration-300 w-full h-full  "></div>
                                <div className="relative flex items-center group-hover:text-white duration-300   w-fit   overflow-hidden">
                                    <span className="relative group-hover:translate-x-0 translate-x-[-100%] transition-transform duration-250 ease-in-out">Sign-In</span>
                                    <span className="absolute translate-x-0 group-hover:translate-x-[100%] transition-transform duration-250 ease-in-out">Sign-In</span>
                                </div>

                                <div className="absolute inset-0 bg-pink-500 z-[-1] translate-x-[-100%] transition-transform duration-250 ease-in-out group-hover:translate-x-0"></div>
                            </button>

                            {/* BOOK A DEMO button */}
                            <button className="relative  gap-2 py-2.5  px-5 flex justify-between items-center bg-yellow-500 cursor-pointer border-[1px] border-black rounded-full  transition-all duration-250 ease-in-out group overflow-hidden">
                                <div className=" absolute  bg-white top-0 left-[-100%] group-hover:left-0 duration-300 w-full h-full  "></div>
                                <div className="relative flex items-center   w-fit   overflow-hidden">
                                    <span className="relative group-hover:translate-x-0 translate-x-[-100%] transition-transform duration-250 ease-in-out">Book A Demo</span>
                                    <span className="absolute translate-x-0 group-hover:translate-x-[100%] transition-transform duration-250 ease-in-out">Book A Demo</span>
                                </div>
                                <div className="relative p-2 border-[1px] border-black rounded-full bg-white transition-transform duration-250 ease-in-out overflow-hidden group-hover:translate-x-1">
                                    <svg
                                        width=".7vw"
                                        height=".7vw"
                                        viewBox="0 0 45 38"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className=" group-hover:left-[100%] duration-300 left-0 relative "
                                    >
                                        <path
                                            d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                                            fill="black"
                                        ></path>
                                    </svg>
                                    <div className="absolute flex items-center justify-center inset-0 bg-yellow-500 rounded-full translate-x-[-100%] transition-transform duration-250 ease-in-out group-hover:translate-x-0">
                                        <svg
                                            width=".7vw"
                                            height=".7vw"
                                            viewBox="0 0 45 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                                                fill="black"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-pink-500 z-[-1] translate-x-[-100%] transition-transform duration-250 ease-in-out group-hover:translate-x-0"></div>
                            </button>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden md:hidden flex items-center justify-end">
                            <button
                                className={`text-gray-700  focus:outline-none duration-300  `}
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <svg
                                    className={` duration-300 ${menuOpen ? ' w-0 ' : ' w-6 h-6 '} `}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>

                            <button className={`text-gray-700  focus:outline-none duration-300 `}
                                onClick={() => setMenuOpen(!menuOpen)} >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className={` duration-300 ${menuOpen ? ' w-6 h-6 ' : ' w-0 '} `}
                                    fill="currentColor"
                                >
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
                                    />
                                </svg>
                            </button>


                        </div>
                    </div>
                </div>
                {/* Mobile Menu (Visible when menuOpen is true) */}
                {/* Mobile Menu (Visible when menuOpen is true) */}
                {menuOpen && (
                    <motion.div
                        className="lg:hidden md:hidden bg-gray-100 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <div className="flex flex-col items-center space-y-4 py-4">
                            <motion.div variants={linkVariants}>
                                <Link href="/company" className="text-gray-700 hover:text-black">
                                    COMPANY
                                </Link>
                            </motion.div>

                            <motion.div variants={linkVariants}>
                                <Link href="/content" className="text-gray-700 hover:text-black">
                                    CONTENT
                                </Link>
                            </motion.div>

                            <motion.div variants={linkVariants}>
                                <Link href="/cpg-house" className="text-gray-700 hover:text-black">
                                    CPG HOUSE
                                </Link>
                            </motion.div>

                            <motion.div variants={linkVariants}>
                                <Link href="/pricing" className="text-gray-700 hover:text-black">
                                    PRICING
                                </Link>
                            </motion.div>

                            <motion.div variants={linkVariants}>
                                <button className="relative gap-2 py-2.5 px-5 flex justify-between items-center bg-white cursor-pointer border-[1px] border-black rounded-full transition-all duration-250 ease-in-out group overflow-hidden">
                                    <div className="absolute bg-black top-0 left-[-100%] group-hover:left-0 duration-300 w-full h-full"></div>
                                    <div className="relative flex items-center group-hover:text-white duration-300 w-fit overflow-hidden">
                                        <span className="relative group-hover:translate-x-0 translate-x-[-100%] transition-transform duration-250 ease-in-out">Sign-In</span>
                                        <span className="absolute translate-x-0 group-hover:translate-x-[100%] transition-transform duration-250 ease-in-out">Sign-In</span>
                                    </div>
                                    <div className="absolute inset-0 bg-pink-500 z-[-1] translate-x-[-100%] transition-transform duration-250 ease-in-out group-hover:translate-x-0"></div>
                                </button>
                            </motion.div>

                            <motion.div variants={linkVariants}>
                                <button className="relative gap-2 py-2.5 px-5 flex justify-between items-center bg-yellow-500 cursor-pointer border-[1px] border-black rounded-full transition-all duration-250 ease-in-out group overflow-hidden">
                                    <div className="absolute bg-white top-0 left-[-100%] group-hover:left-0 duration-300 w-full h-full"></div>
                                    <div className="relative flex items-center w-fit overflow-hidden">
                                        <span className="relative group-hover:translate-x-0 translate-x-[-100%] transition-transform duration-250 ease-in-out">Book A Demo</span>
                                        <span className="absolute translate-x-0 group-hover:translate-x-[100%] transition-transform duration-250 ease-in-out">Book A Demo</span>
                                    </div>
                                    <div className="relative p-2 border-[1px] border-black rounded-full bg-white transition-transform duration-250 ease-in-out overflow-hidden group-hover:translate-x-1">
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 45 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className=" group-hover:left-[100%] duration-300 left-0 relative "
                                        >
                                            <path
                                                d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                                                fill="black"
                                            ></path>
                                        </svg>
                                        <div className="absolute flex items-center justify-center inset-0 bg-yellow-500 rounded-full translate-x-[-100%] transition-transform duration-250 ease-in-out group-hover:translate-x-0">
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 45 38"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                                                    fill="black"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-pink-500 z-[-1] translate-x-[-100%] transition-transform duration-250 ease-in-out group-hover:translate-x-0"></div>
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </nav>
        </>
    )
}
