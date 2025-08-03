"use client";

import { useState } from "react";
import { allCocktails } from "@/data/index";
import { cn } from "@/utils/cn";
import { MenuArrowButton } from "@/components/ui/MenuArrowButton";

import arrowLeft from "/images/left-arrow.png";
import arrowRight from "/images/right-arrow.png";
import { AnimatePresence, motion } from "framer-motion";

export const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCocktails = allCocktails.length;

    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    };

    const getCocktailAt = (indexOffset) => {
        return allCocktails[
            (currentIndex + indexOffset + totalCocktails) % totalCocktails
        ];
    };

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

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
                <div className="arrows">
                    <MenuArrowButton
                        goToSlide={() => goToSlide(currentIndex - 1)}
                        arrow={arrowRight}
                    >
                        {prevCocktail.name}
                    </MenuArrowButton>
                    <MenuArrowButton
                        goToSlide={() => goToSlide(currentIndex + 1)}
                        arrow={arrowLeft}
                    >
                        {nextCocktail.name}
                    </MenuArrowButton>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentCocktail.id}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="cocktail"
                    >
                        <img
                            src={currentCocktail.image}
                            alt=""
                            className="object-contain"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="recipe">
                    <motion.div
                        key={`title-${currentCocktail.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="info"
                    >
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </motion.div>

                    <div className="details">
                        <motion.h2
                            key={`h2-${currentCocktail.id}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {currentCocktail.title}
                        </motion.h2>

                        <motion.p
                            key={`desc-${currentCocktail.id}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                        >
                            {currentCocktail.description}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};
