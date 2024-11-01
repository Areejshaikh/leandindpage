import Image from "next/image";
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from '../../../public/service-1.jpeg'
import image2 from '../../../public/servise-2.webp'
import image3 from '../../../public/services-3.jpeg'
import image4 from '../../../public/services-4.jpeg'
import image5 from '../../../public/service-1.jpeg'
import image6 from '../../../public/services-6.webp'

export const Services = () => {
    return (
        <div id="services" className="pb-24">

            {/* heading Service */}

            <h3 className=" text-gray-900 flex justify-center mx-4 md:mx-0 text-4xl font-semibold pt-8 ">
                Our Offered Services that grow interests
            </h3>
            <div className=" text-gray-700 flex justify-center mx-4 md:mx-0 my-4 md:my-0 text-lg pb-4">
                <span>Who are in extremely love with eco friendly system.</span>
            </div>
            <div>
                <div className="hidden mb-12 text-pink-800 md:flex justify-center text-center">

                    <Link className="text-lg" href="/">Home</Link>
                    <span className="px-4 pt-1 text-2xl">
                        <FaArrowRightLong /> </span>
                    <Link className="text-lg" href="#services">Services</Link>
                </div>
            </div>
            {/* end heading */}



            {/* box */}


            <div className=" flex flex-wrap justify-center text-center gap-8 gap-y-8 ">
                
                

                <div className="w-80 max-h-[29rem] justify-around hover:shadow-2xl">
                    <div>
                        <Image
                            className="w-80 h-52"
                            src={image1}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-12 px-4">
                        <span className="font-bold text text-xl tracking-wider">Personol Trainings</span>
                        <p className="text-gray-400 my-12 text-xs md:text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>

                <div className="w-80 max-h-[29rem] justify-around hover:shadow-2xl">
                    <div>
                        <Image
                            className="w-80 h-52"
                            src={image2}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-12 px-4">
                        <span className="font-bold text text-xl tracking-wider">Personol Trainings</span>
                        <p className="text-gray-400 my-12 text-xs md:text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>
                <div className="w-80 max-h-[29rem] justify-around hover:shadow-2xl">
                    <div>
                        <Image
                            className="w-80 h-52"
                            src={image3}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-12 px-4">
                        <span className="font-bold text text-xl tracking-wider">Personol Trainings</span>
                        <p className="text-gray-400 my-12 text-xs md:text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>


                <div className="w-80 max-h-[29rem] justify-around hover:shadow-2xl">
                    <div>
                        <Image
                            className="w-80 h-52"
                            src={image4}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-12 px-4">
                        <span className="font-bold text text-xl tracking-wider">Personol Trainings</span>
                        <p className="text-gray-400 my-12 text-xs md:text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>




                <div className=" w-80 max-h-[29rem] justify-around hover:shadow-2xl">
                    <div>
                        <Image
                            className="w-80 h-52"
                            src={image5}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-12 px-4">
                        <span className="font-bold text text-xl tracking-wider">Personol Trainings</span>
                        <p className="text-gray-400 my-12 text-xs md:text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>


                <div className=" w-80 max-h-[29rem] justify-around hover:shadow-2xl">
                    <div>
                        <Image
                            className="w-80 h-52"
                            src={image6}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-12 px-4">
                        <span className="font-bold text text-xl tracking-wider">Personol Trainings</span>
                        <p className="text-gray-400 my-12 text-xs md:text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

                        </p>
                    </div>
                </div>


                
            </div>
        </div>

    )
}