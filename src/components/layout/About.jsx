import { cn } from "@/utils/cn";

export const About = () => {
    return (
        <section id="about">
            <div className={cn("mb-16 px-5", "md:px-0")}>
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>
                            Where every detail matters{" "}
                            <span className="text-white">-</span> from muddle to
                            garnish
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};
