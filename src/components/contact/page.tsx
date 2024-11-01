import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { PiHouseLine } from "react-icons/pi";
import Buttons from "../button/page";



function Contact() {
    return (
        <section id="contact" className="flex flex-wrap  justify-center max-h-full max-w-full  bg-gray-200">
            {/* left site */}
            <div className="">

                <div className="flex flex-wrap my-8">
                    <span className="text-pink-800 text-4xl pt-1 "><PiHouseLine /></span>
                    <div className="mx-auto md:mx-8">
                        <p className="text-gray-700 text-base tracking-wide leading-relaxed">
                            Dhaka, Bangladesh
                        </p>

                        <span className="text-gray-400 text-lg">56/8, West Panthapath</span>
                    </div>
                </div>

                <div className="flex ">
                    <span className="text-pink-800 text-4xl pt-1 "><LuPhone />
                    </span>
                    <div className="mx-auto md:mx-8">
                        <p className="text-gray-700 text-base tracking-wide leading-tight ">
                            00 (880) 9865 562
                        </p>

                        <span className="text-gray-400 text-lg">Mon to Fri 9am to 6 pm</span>
                    </div>
                </div>



                <div className="flex my-8">
                    <span className="text-pink-800 text-4xl pt-1 "><MdOutlineMail /></span>
                    <div className="mx-auto md:mx-8 ml-2 md:ml-0">
                        <p className="text-gray-700 text-base tracking-wide leading-tight">
                            support@codethemes.com

                        </p>

                        <span className="text-gray-400 text-lg">Send us your query anytime!

                        </span>
                    </div>
                </div>
            </div>

            {/* mid side section */}

            <div className="justify-center ">
                <div className="mt-8 mb-4">
                    <input 
                    type="text" 
                    name="text" 
                    id="text" 
                    placeholder="Enter Your Name"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full sm:w-1/2 md:w-80"/>
                </div>

                <div className="my-4">
                    <input 
                    type="text" 
                    name="text" 
                    id="text" 
                    placeholder="Enter Email"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full sm:w-1/3 md:w-80"/>
                </div>


                <div className="my-4">
                    <input 
                    type="text" 
                    name="text" 
                    id="text" 
                    placeholder="Enter Your Name"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full sm:w-1/2 md:w-80"/>
                </div>
                
            </div>
            {/* right side section */}
            <div className="mt-8 md:ml-8 ">
                <textarea name="textarea" id="textarea" rows={7}
               
               className="text-gray-400 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full sm:w-1/2 lg:w-80">Message</textarea>
           <div >
           <Buttons text="Send Message" colorType="primery"/>
           
           </div>
            </div>
        </section>
    )
}

export default Contact