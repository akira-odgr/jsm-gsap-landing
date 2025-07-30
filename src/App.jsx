import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Cocktails } from "@/components/layout/Cocktails";
import { About } from "@/components/layout/About";
import { Art } from "@/components/layout/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
        </main>
    );
};

export default App;
