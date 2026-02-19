import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import RotatingText from "./RotatingText";
import BlurText from "./BlurText";
import PrismaticBurst from "./ui/PrismaticBurst";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24 md:py-32 lg:py-40">
      {/* PrismaticBurst Background */}
      <div className="absolute inset-0 z-0">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={1.5}
          speed={0.3}
          distort={2}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={0}
          mixBlendMode="lighten"
          colors={['#10b981', '#059669', '#047857']}
        />
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/8 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--gold) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Centered content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10 md:space-y-12"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="font-medium tracking-widest uppercase text-base md:text-lg flex items-center justify-center gap-2"
              >
                <RotatingText
                  texts={['Author', 'Finance Strategist', 'Wealth Mentor', 'Bestselling Author']}
                  mainClassName="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium text-base md:text-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.02}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2500}
                />
              </motion.div>
              <div className="text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[1.1] tracking-tight space-y-2">
                <BlurText
                  text="Arvind"
                  delay={80}
                  animateBy="characters"
                  direction="bottom"
                  className="text-foreground !justify-center"
                />
                <BlurText
                  text="Raman"
                  delay={80}
                  animateBy="characters"
                  direction="bottom"
                  className="text-primary !justify-center"
                />
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-display italic max-w-3xl mx-auto pt-2">
                "Transforming Financial Confusion into Financial Freedom"
              </p>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-secondary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              A leading personal finance educator and bestselling author helping individuals build long-term wealth through practical, simple, and sustainable financial strategies.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="#books"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base md:text-lg hover:opacity-90 transition-all gold-glow"
              >
                <BookOpen size={22} />
                Explore Books
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-primary/30 text-primary font-semibold text-base md:text-lg hover:bg-primary/10 transition-all"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
