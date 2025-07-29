import { cocktailLists, mockTailLists } from "@/data/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { CocktailList } from "@/components/ui/CocktailList";

export const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            },
        });

        parallaxTimeline
            .from("#c-left-leaf", {
                x: -100,
                y: 100,
            })
            .from("#c-right-leaf", {
                x: 100,
                y: 100,
            });
    }, []);

    return (
        <section id="cocktails" className="noisy">
            <img
                src="/images/cocktail-left-leaf.png"
                alt="l-leaf"
                id="c-left-leaf"
            />
            <img
                src="/images/cocktail-right-leaf.png"
                alt="r-leaf"
                id="c-right-leaf"
            />

            <div className="list">
                <div className="popular">
                    <CocktailList
                        title="Most loved cocktails:"
                        items={cocktailLists}
                    />
                </div>

                <div className="loved">
                    <CocktailList
                        title="Most loved mocktails"
                        items={mockTailLists}
                    />
                </div>
            </div>
        </section>
    );
};
