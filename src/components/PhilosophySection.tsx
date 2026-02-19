import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import arvindPortrait from "@/assets/arvind-portrait.jpg";
// import FluidGlass from "./FluidGlass";

const PhilosophySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

    return (
        <section
            ref={containerRef}
            className="py-32 lg:py-40 bg-foreground text-background overflow-hidden relative"
        >
            {/* 3D FluidGlass Background - Temporarily disabled */}
            {/* <div className="absolute inset-0 opacity-40 pointer-events-none">
                <FluidGlass 
                    text="Legacy" 
                    mode="sphere"
                    ior={1.2}
                    thickness={3}
                    chromaticAberration={0.5}
                />
            </div> */}

            {/* Abstract Background Elements */}
            <motion.div
                style={{ y: y1, rotate }}
                className="absolute top-20 left-[10%] w-64 h-40 bg-primary/20 rounded-2xl blur-3xl"
            />
            <motion.div
                style={{ y: y2, rotate: rotate }}
                className="absolute bottom-20 right-[10%] w-80 h-80 bg-primary/10 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] tracking-tight uppercase"
                    >
                        Wealth isn't just <br className="hidden md:block" />
                        <span className="inline-block relative px-2">
                            numbers
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute inset-0 bg-primary/20 -skew-x-12 -z-10"
                            />
                        </span>
                        — it's your
                        <div className="inline-flex items-center align-middle mx-4 my-2">
                            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary/50">
                                <img
                                    src={arvindPortrait}
                                    alt="Philosophy"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                        Freedom,
                        <br />
                        Peace of Mind, and the
                        <span className="text-primary italic normal-case font-serif tracking-normal ml-4">Legacy</span>
                        <br />
                        You Leave Behind.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
                    >
                        <button className="px-8 py-4 rounded-full bg-background text-foreground font-semibold hover:bg-white transition-colors duration-300">
                            Our Philosophy
                        </button>
                        <button className="px-8 py-4 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors duration-300">
                            Learn Methodology
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
