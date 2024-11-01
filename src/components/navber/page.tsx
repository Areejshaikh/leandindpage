"use client"
import Image from "next/image";
import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Image1 from "../../../public/hourselogo.jpg"
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";



export const Navber = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="fixed w-[100%] z-50  shadow-md max-w-full justify-center  items-center bg-white">

            <div className="  md:flex sm:justify-around ">
                {/* Navber Logo */}
                <div className="hidden md:flex md:items-center">
                    <span className="border w-20 h-16 mx-4 flex justify-center items-center text-2xl text-white bg-gradient-to-br from-orange-400 to bg-red-600"><MdEmail /></span>  {/* //icon */}
                    <Link className="text-xl" href={"/"}>info@horseclub.com</Link>
                </div>

                {/* Navber Center */}

                <div className="md:text-xl font-bold items-center flex relative  ">
                    <Image
                        className="h-12 w-16"
                        src={Image1}
                        alt="logo"
                        width={200}
                        height={400} />
                    <h2>HOURSR CLUB</h2>
                    
                    <button className="ml-auto mr-4 text-2xl md:hidden text-red-500 "
                        onClick={toggleMenu}>
                            {isOpen ? <RxCross1/> :<RxHamburgerMenu />} 
                    </button>

                </div>



                {/* Navber Buttons */}

                <div className="hidden md:flex items-center">
                    <span>+321-123-12-334-125</span>
                    <span className="border h-16 w-20 mx-4  flex justify-center items-center text-xl text-white bg-gradient-to-br from-orange-400 to-red-600" ><FaPhoneAlt /></span> {/* Icon Phone */}
                </div>

            </div>

            {/* create line */}
            <div className="md:border-t md:border-gray-300 md:w-full"></div>


            {/* Navber Icons */}
            
    <div className={`flex-col md:flex-row ${isOpen ? 'flex' : 'hidden'} md:flex justify-center text-center        
    `}>
        <ul className="text-white md:text-slate-900 md:flex text-left md:justify-center md:text-center md:space-x-6 space-y-2 md:space-y-0 text-1xl font-semibold  md:flex-none md:text-xs md:my-4
        md:bg-white bg-gradient-to-br from-orange-400 to bg-red-600 left-0 py-4 md:py-0 px-8 md:px-0 top-0 w-60  md:w-0 transform trasnlate transition duration-200 ease-in">
            <li>
                <Link href={"/"} className="hover:text-red-500">Home</Link>
            </li>
            <li>
                <Link href={"#about"} className="hover:text-red-500">About</Link>
            </li>
            <li>
                <Link href={"#services"} className="hover:text-red-500">Service</Link>
            </li>
            <li>
                <Link href={"#Training"} className="hover:text-red-500">Training</Link>
            </li>
            <li>
                <Link href={"#events"} className="hover:text-red-500">Events</Link>
            </li>
            <li>
                <Link href={"#pricing"} className="hover:text-red-500">Pricing</Link>
            </li>
            <li>
                <Link href={"#blog"} className="hover:text-red-500">Blog</Link>
            </li>
            <li>
                <Link href={"#contact"} className="hover:text-red-500">Contact</Link>
            </li>
           
        </ul>
    </div>


        </nav>


    )
}















// https://preview.colorlib.com/#horseclub