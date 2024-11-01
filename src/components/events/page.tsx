import Image from "next/image";
import Link from "next/link"
import Image1 from "../../../public/service-1.jpeg"
import { FaArrowRightLong } from "react-icons/fa6";
import Buttons from "../button/page";

function Events() {
    return (
        <section id="events" className="max-h-full max-w-full">
            <h3 className="md:pt-32 text-gray-900 flex justify-center text-4xl md:text-6xl font-semibold py-4 px-4">
                Upcoming Events
            </h3>

            <div className="hidden mb-12 text-gray-800 md:flex justify-center text-center">

                <Link className="text-lg" href="/">Home</Link>
                <span className="px-4 pt-1 text-2xl">
                    <FaArrowRightLong /> </span>
                <Link className="text-lg" href="#events">Events</Link>
            </div>



            {/* heading */}


            <h3 className=" text-gray-900 flex justify-center mx-4 md:mx-0 text-4xl font-semibold pt-8 ">
                Checkout our Upcoming Events
            </h3>
            <div className=" text-gray-700 flex justify-center mx-4 md:mx-0 my-4 md:my-4 text-lg pb-4">
                <span>Who are in extremely love with eco friendly system.</span>
            </div>

            {/* events details */}

            {/* first box */}
            <div className="flex flex-col md:flex-row justify-around items-center gap-4 md:mx-32">
                <div className="md:w-1/2  w-60">
                    <Image
                        className="w-full h-52 object-cover rounded-md md:mx-0 m-4"
                        alt="Event related image"
                        src={Image1}
                        width={1100}
                        height={200}
                    />
                </div>
                <div className="md:w-1/2 p-4">
                    <Link href="#events" className="  text-lg font-bold leading-relaxed tracking-wider">
                        Event on the Rock Solid Carbon
                    </Link>
                    <p className=" mt-2 mb-4 leading-relaxed tracking-wider text-xl text-gray-400">
                        <span className="text-gray-900"><span className="text-pink-800">21st February</span></span> at Central Government Museum
                    </p>
                    <p className="leading-relaxed text-gray-400 ">
                        Inappropriate behavior is often laughed off as “boys will be boys,” while women face higher conduct standards.
                    </p>
                    <Buttons
                        text="View Details" colorType="secondary" />
                </div>
            </div>

            {/* second box */}

            <div className="flex flex-col md:flex-row justify-around items-center gap-4 mx-32">

                <div className="md:w-1/2 p-4">
                    <Link href="#events" className=" text-gray-900 text-lg font-bold leading-relaxed tracking-wider">
                        Event on the Rock Solid Carbon
                    </Link>
                    <p className=" mt-2 mb-4 leading-relaxed tracking-wider text-xl text-gray-400">
                        <span className="text-gray-900"><span className="text-pink-800">21st February</span></span> at Central Government Museum
                    </p>
                    <p className="leading-relaxed text-gray-400 ">
                        Inappropriate behavior is often laughed off as “boys will be boys,” while women face higher conduct standards.
                    </p>
                    <div className="mb-0 mt-2">
                        <Buttons
                            text="View Details" colorType="secondary" />
                    </div>
                </div>
                <div className="md:w-1/2  w-60">
                    <Image
                        className="w-full h-52 object-cover rounded-md m-4"
                        alt="Event related image"
                        src={Image1}
                        width={1100}
                        height={200}
                    />
                </div>
            </div>
            {/* third box */}
            <div className="flex flex-col md:flex-row justify-around items-center gap-4 mx-32">
                <div className="md:w-1/2  w-60">
                    <Image
                        className="w-full h-52 object-cover rounded-md m-4"
                        alt="Event related image"
                        src={Image1}
                        width={1100}
                        height={200}
                    />
                </div>
                <div className="md:w-1/2 p-4">
                    <Link href="#events" className=" text-gray-900 text-lg font-bold leading-relaxed tracking-wider">
                        Event on the Rock Solid Carbon
                    </Link>
                    <p className=" mt-2 mb-4 leading-relaxed tracking-wider text-xl text-gray-400">
                        <span className="text-gray-900"><span className="text-pink-800">21st February</span></span> at Central Government Museum
                    </p>
                    <p className="leading-relaxed text-gray-400">
                        Inappropriate behavior is often laughed off as “boys will be boys,” while women face higher conduct standards.
                    </p>

                    <Buttons
                        text="View Details" colorType="secondary" />

                </div>
            </div>


            {/* fourth box */}


            <div className="flex flex-col md:flex-row justify-around items-center gap-4 mx-32">

                <div className="md:w-1/2 p-4">
                    <Link href="#events" className=" text-gray-900 text-lg font-bold leading-relaxed tracking-wider">
                        Event on the Rock Solid Carbon
                    </Link>
                    <p className=" mt-2 mb-4 leading-relaxed tracking-wider text-xl text-gray-400">
                        <span className="text-gray-900"><span className="text-pink-800">21st February</span></span> at Central Government Museum
                    </p>
                    <p className="leading-relaxed text-gray-400 ">
                        Inappropriate behavior is often laughed off as “boys will be boys,” while women face higher conduct standards.
                    </p>

                    <Buttons
                        text="View Details" colorType="secondary" />

                </div>
                <div className="md:w-1/2  w-60 ">
                    <Image
                        className="w-full h-52 object-cover rounded-md m-4"
                        alt="Event related image"
                        src={Image1}
                        width={1100}
                        height={200}
                    />
                </div>
            </div>

        </section>

    )
}



export default Events

