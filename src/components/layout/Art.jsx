import { goodLists, featureLists } from "@/data/index";
import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // ✅ Hookはトップで

    useGSAP(() => {
        const start = isMobile ? "top 20%" : "top top";

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start,
                end: "bottom center",
                scrub: 1.5,
                pin: true,
            },
        });

        maskTimeline
            .to(".will-fade", {
                opacity: 0,
                stagger: 0.2,
                ease: "power1.inOut",
            })
            .to(".masked-img", {
                scale: 1.3,
                maskPosition: "center",
                maskSize: "400%",
                duration: 1,
                ease: "power1.inOut",
            })
            .to("#masked-content", {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
            });
    });

    return (
        <section id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade">The ART</h2>

                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-x-2"
                            >
                                <img src="/images/check.png" alt="check" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="cocktail-img">
                        <img
                            src="/images/under-img.jpg"
                            alt="cocktail"
                            className="abs-center masked-img size-full object-cover"
                        />
                    </div>

                    <ul className="space-y-4 will-fade">
                        {featureLists.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-start gap-x-2"
                            >
                                <img src="/images/check.png" alt="check" />
                                <p className={cn("w-60", "md:w-fit")}>
                                    {feature}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    <div
                        id="masked-content"
                        className="opacity-0 transition-opacity duration-500"
                    >
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>
                            This isn't just a drink. It's a carefully crafted
                            moment made just for you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
