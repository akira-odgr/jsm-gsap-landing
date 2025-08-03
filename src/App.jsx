import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Cocktails } from "@/components/layout/Cocktails";
import { About } from "@/components/layout/About";
import { Art } from "@/components/layout/Art";
import { Menu } from "@/components/layout/Menu";
import { Contact } from "@/components/layout/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
    return (
        <main className="overflow-y-hidden">
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Contact />
        </main>
    );
};

export default App;
