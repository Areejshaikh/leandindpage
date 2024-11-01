import Image from "next/image";
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from '../../../public/service-1.jpeg'
import image2 from '../../../public/servise-2.webp'
import image3 from '../../../public/services-3.jpeg'
import image4 from '../../../public/services-4.jpeg'
import image5 from '../../../public/service-1.jpeg'
import image6 from '../../../public/services-6.webp'

export const Training = () => {
    return (
        <div id="training" className="pb-24 p-4 md:p-0">

            {/* heading Service */}

            <div className=" text-gray-900 flex justify-center  text-4xl font-semibold pt-8 ">
                <span>Our Offered Training Programs</span>
            </div>
            <div className=" text-gray-700 flex justify-center  text-lg pb-4">
                <span>Our Offered Training Programs</span>
            </div>
            <div>
                <div className="hidden mb-12 text-pink-800 md:flex justify-center text-center">

                    <Link className="text-lg" href="/">Home</Link>
                    <span className="px-4 pt-1 text-2xl">
                        <FaArrowRightLong /> </span>
                    <Link className="text-lg" href="#Training">Training</Link>
                </div>
            </div>
            {/* end heading */}



            {/* box */}


            <div className=" flex flex-wrap justify-center text-center gap-8 gap-y-8 ">



                <div className=" relative w-80 max-h-[27rem] justify-around hover:shadow-2xl">

                    <div className="absolute top-2 left-2 z-10 p-2 text-white bg-pink-800 ">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52"
                            src={image1}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-56 px-4">
                        <span className="font-bold text text-xl tracking-wider flex justify-between text-pink-800">Bsc  in Film & Media <span>$2500</span></span>
                        <p className="text-left text-gray-400 my-12 text-xs md:text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>

                <div className="relative w-80 max-h-[27rem] justify-around hover:shadow-2xl">
                <div className="absolute top-2 left-2 z-10 p-2   text-white bg-pink-800">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52"
                            src={image2}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-56 px-4">
                        <span className="font-bold text-xl tracking-wider md:flex md:justify-between text-pink-800">
                            Bsc  in Film & Media <span>$2500</span>
                            </span>
                        <p className=" text-left text-gray-400 my-12 text-xs md:text-lg ">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>
                <div className="relative w-80 max-h-[27rem] justify-around hover:shadow-2xl">
                <div className="absolute top-2 left-2 z-10 p-2   text-white bg-pink-800">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absulute">
                        <Image
                            className="w-80 h-52"
                            src={image3}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-4 px-4">
                        <span className="font-bold text text-xl tracking-wider flex justify-between text-pink-800">Bsc  in Film & Media <span>$2500</span></span>
                        <p className="text-gray-400 my-12 text-xs md:text-lg text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>


                <div className="relative w-80 max-h-[27rem] justify-around hover:shadow-2xl">
                <div className="absolute top-2 left-2 z-10 p-2   text-white bg-pink-800">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52"
                            src={image4}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-56 px-4">
                        <span className="font-bold text text-xl tracking-wider flex justify-between text-pink-800">Bsc  in Film & Media <span>$2500</span></span>
                        <p className="text-gray-400 my-12 text-xs md:text-lg text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>
                <div className="relative w-80 max-h-[27rem] justify-around hover:shadow-2xl">
                <div className="absolute top-2 left-2 z-10 p-2   text-white bg-pink-800">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52"
                            src={image5}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-56 px-4">
                        <span className="font-bold text text-xl tracking-wider flex justify-between text-pink-800">Bsc  in Film & Media <span>$2500</span></span>
                        <p className="text-gray-400 my-12 text-xs md:text-lg text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>

                <div className="relative w-80 max-h-[27rem] justify-around hover:shadow-2xl">
                <div className="absolute top-2 left-2 z-10 p-2   text-white bg-pink-800">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52"
                            src={image6}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-56 px-4">
                        <span className="font-bold text text-xl tracking-wider flex justify-between text-pink-800">Bsc  in Film & Media <span>$2500</span></span>
                        <p className="text-gray-400 my-12 text-xs md:text-lg text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>



            </div>
        </div>

    )
}