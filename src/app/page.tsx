import Image from "next/image";

import logo from "../../public/logo1.jpg"


export default function Home() {
    return (

        <div>
            <nav className="sm:px-4 bg-sky-900 sm:flex sm:justify-between ">
                <Image src={logo} alt="Logo" className=" ml-16 rounded-full w-52 h-52 text-center sm:w-10 sm:h-10 sm:mt-2 sm:rounded-3xl" />
                <ul className=" ml-36 text-2xl py-6  text-white sm:flex sm:justify-end sm:px-24 sm:py-4 sm:space-x-10 hover:underline">
                    <li className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">Home</li>
                    <li className="cursor-pointertransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300   ">About</li>
                    <li className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">Blog</li>
                    <li className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  ">Contect</li>
                </ul>
            </nav>
            <main className="bg-sky-900  sm:flex ">
                <div className="text-white">
                    <div className="text-4xl font-bold  leading-snug mx-4 text-center sm:ml-12 sm:text-lef md:ml-12 md:text-left lg:ml-12 lg:text-left lg:pt-32  uppercase ">
                        The Smart phone in our Town
                    </div>
                    <div className="text-1xl mx-12 pt-6 tracking-widest  sm:ml-14  md:mr-72  lg:mr-[26rem] xl:mr-[35rem]">
                        <p>Lorem ipsum, dolor sit amet is consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat eum harum quisquam repellendus in, deserunt ea nihil animi impedit dolorem voluptates ratione cumque facere, sunt illo nam iure! Non.lorem2 adipisicing elit. Architecto quo tempore, delectus tempora quia ad exercitationem fugit laboriosam saepe facere iste? Alias, consectetur?
                        </p>
                    </div>
                    <div>
                        <button className="border border-white bg-sky-950 text-white px-6 py-2 ml-12 my-8"> Buy Now</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
