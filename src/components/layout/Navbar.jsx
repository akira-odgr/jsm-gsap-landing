import { useRef } from "react";
import { navLinks } from "@/data/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
    const navRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: navRef.current,
                start: "bottom top",
                // toggleActions: "play none none reverse",
                // scroller:
                //     document.querySelector("[data-lenis-scroll]") || window,
            },
        });

        tl.fromTo(
            navRef.current,
            { backgroundColor: "transparent" },
            {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                duration: 1,
                ease: "power1.inOut",
            }
        );
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 transition-all py-4 px-6"
        >
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <a href="#home" className="flex items-center gap-x-2">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="h-8 w-auto"
                    />
                    <p className="text-white font-bold text-lg">Velvet Pour</p>
                </a>

                <ul className="flex gap-x-6 text-white">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
