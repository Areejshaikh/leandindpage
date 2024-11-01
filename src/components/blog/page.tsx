import Image from "next/image"
import Image1 from "../../../public/blog1.webp"
import Image2 from "../../../public/blog2.jpeg"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";




function Blog() {
    return (
        <section id="blog" className="my-12">

            <h3 className="md:pt-32 text-gray-900 flex justify-center text-4xl md:text-6xl font-semibold py-4 px-4">
                Blog Home
            </h3>

            <div className="hidden mb-12 text-gray-800 md:flex justify-center text-center">

                <Link className="text-lg" href="/">Home</Link>
                <span className="px-4 pt-1 text-2xl">
                    <FaArrowRightLong /> </span>
                <Link className="text-lg" href="#blog">Blog</Link>
            </div>



            {/* heading */}


            <h3 className=" text-gray-900 flex justify-center mx-4 md:mx-0 text-4xl font-semibold pt-8 ">
                Latest News from our Blog
            </h3>
            <div className=" text-gray-700 flex justify-center mx-4 md:mx-0 my-4 md:my-4 text-lg pb-4">
                <span>Who are in extremely love with eco friendly system.</span>
            </div>

            <div className="flex justify-center gap-8 flex-wrap">
                <div>

                    <div className="w-96">
                        <Image
                            className="h-52 object-cover rounded-md "
                            alt="Event related image"
                            src={Image1}
                            width={1100}
                            height={200}
                        />
                    </div>
                    <div className="my-4">
                        <Link href={""} className="border py-1 px-4 bg-pink-800  text-xs text-white">Travel</Link>
                        <Link href={""} className="border py-1 px-4 bg-pink-800  text-xs text-white">Life Style</Link>
                    </div>
                    <Link href="#blog" className=" text-gray-900 top-4 text-sm font-bold leading-relaxed tracking-wider">
                        Portable Latest Fashion For Young Women
                    </Link>
                    <p className="leading-relaxed text-gray-400 text-xs ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore.
                    </p>
                    <span>1st November, 2024</span>


                </div>
                {/* second box */}




                <div>

                    <div className="w-96">
                        <Image
                            className="h-52 object-cover rounded-md "
                            alt="Event related image"
                            src={Image2}
                            width={1100}
                            height={200}
                        />
                    </div>
                    <div className="my-4">
                        <Link href={""} className="border py-1 px-4 bg-pink-800  text-xs text-white">Travel</Link>
                        <Link href={""} className="border py-1 px-4 bg-pink-800  text-xs text-white">Life Style</Link>
                    </div>
                    <Link href="#blog" className=" text-gray-900 top-4 text-sm font-bold leading-relaxed tracking-wider">
                        Portable Latest Fashion For Young Women
                    </Link>
                    <p className="leading-relaxed text-gray-400 text-xs ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore.
                    </p>
                    <span>1st November, 2024</span>

                </div>

            </div>



        </section>


    )
}


export default Blog