import About from "../components/about/page";
import Blog from "../components/blog/page";
import Contact from "../components/contact/page";
import Events from "../components/events/page";
import { Hero } from "../components/hero/page";
import { Navber } from "../components/navber/page";
import Pricing from "../components/pricing/page";
import { Services } from "../components/services/page";
import { Training } from "../components/training/page";
export default function Home() {
    return (
        <>
            <Navber />
            <Hero />
            <About />
            <Services />
            <Training />
            <Events />
            <Pricing />
            <Blog />
            <Contact />
        </>
    );
}
