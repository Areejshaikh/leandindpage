"use client"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import Buttons from "../button/page";
import Image from "next/image";
import About1 from "../../../public/about1.avif"
import About2 from "../../../public/services-6.webp"


function About() {
    return (
        <section id="about" className="max-w-full max-h-full ">
           <h3 className="md:pt-32 text-gray-900 flex justify-center text-4xl md:text-6xl font-semibold py-4">
                About Us
            </h3>
           
                <div className="hidden mb-12 text-gray-800 md:flex justify-center text-center">

                    <Link className="text-lg" href="/">Home</Link>
                    <span className="px-4 pt-1 text-2xl">
                        <FaArrowRightLong /> </span>
                    <Link className="text-lg" href="#about">About us</Link>
                </div>


            <div className="md:grid md:grid-cols-2 spaace-x-2 gap-4 md:space-x-24 md:max-w-full md:mx-24">
                {/* images left side */}


                <div className="flex justify-center md:gap-16 space-x-6 mx-4 mb-8 md:mb-0">
                <div>
                    <Image 
                    className="w-auto md:w-64 md:h-96 mt-8 md:mt-0"
                    src ={About1}
                    alt="about1"
                    width={200}
                    height={200}
                    />
                </div>
                <div>
                    <Image 
                    className="w-auto md:mt-28 md:w-64 md:h-96 mt-24"
                    src ={About2}
                    alt="about1"
                    width={200}
                    height={200}
                    />
                </div>
                </div>

                {/* right side content */}

                <div className="mx-4 mb:mx-0">
                    <span className="text-pink-700 text-xs mt-28  md:mt-0 leading-relaxed tracking-widest uppercase ">Brand new app to blow your mind</span>
                    <h2 className="my-6 text-4xl font-bold leading-tight md:mr-28 ">
                        We’ve made a life
                        that will change you

                    </h2>

                    <p className="mb-6">We are here to listen from you deliver exellence</p>
                    <p className="text-gray-400 max-w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.

                    </p>

                    <Buttons text="Primary Button"  colorType={'primary'} />
                </div>
            </div>
        </section>
    )
}

export default About