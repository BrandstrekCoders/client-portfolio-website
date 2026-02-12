import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import arvindPortrait from "@/assets/arvind-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/8 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--gold) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-primary font-medium tracking-widest uppercase text-sm"
              >
                Author · Finance Strategist · Wealth Mentor
              </motion.p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground">Arvind</span>
                <br />
                <span className="gold-text">Raman</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-display italic max-w-lg">
                "Transforming Financial Confusion into Financial Freedom"
              </p>
            </div>

            <p className="text-secondary-foreground/80 leading-relaxed max-w-lg">
              A leading personal finance educator and bestselling author helping individuals build long-term wealth through practical, simple, and sustainable financial strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#books"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all gold-glow"
              >
                <BookOpen size={18} />
                Explore Books
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-all"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>

          {/* Right portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-[40px] scale-90" />
              <div className="relative w-80 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden depth-shadow border border-primary/10">
                <img
                  src={arvindPortrait}
                  alt="Arvind Raman - Author and Financial Advisor"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-xl animate-float" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-primary/15 rounded-lg animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
