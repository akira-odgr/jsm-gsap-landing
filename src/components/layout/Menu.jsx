import { useState } from "react";
import { allCocktails } from "@/data/index";
import { cn } from "@/utils/cn";
import { MenuArrowButton } from "@/components/ui/MenuArrowButton";

import arrowLeft from "/images/left-arrow.png";
import arrowRight from "/images/right-arrow.png";

export const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalCocktails = allCocktails.length;

    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;

        setCurrentIndex(newIndex);
    };

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img
                src="/images/slider-left-leaf.png"
                alt="left-leaf"
                id="m-left-leaf"
            />
            <img
                src="images/slider-right-leaf.png"
                alt="right-leaf"
                id="m-right-leaf"
            />

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button
                            key={cocktail.id}
                            className={cn(
                                isActive
                                    ? "text-white border-white"
                                    : "text-white/50 border-white/50"
                            )}
                            onClick={() => goToSlide(index)}
                        >
                            {cocktail.name}
                        </button>
                    );
                })}
            </nav>

            <div className="content">
                <div className="arrow">
                    <MenuArrowButton
                        goToSlide={() => goToSlide(currentIndex - 1)}
                        arrow={arrowRight}
                    >
                        prevcocktailname
                    </MenuArrowButton>
                    <MenuArrowButton
                        goToSlide={() => goToSlide(currentIndex + 1)}
                        arrow={arrowLeft}
                    >
                        nextcocktailname
                    </MenuArrowButton>
                </div>
            </div>
        </section>
    );
};
