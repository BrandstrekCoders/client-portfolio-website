import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Crosshair from "./Crosshair";
import SectionHeading from "./SectionHeading";
import MagicCard from "./ui/MagicCard";

const articles = [
  { title: "How to Build Wealth in Your 30s", date: "Jan 2026" },
  { title: "The Psychology Behind Financial Success", date: "Dec 2025" },
  { title: "Why Most Investors Fail (And How to Avoid It)", date: "Nov 2025" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const BlogSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="blog" ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden">
      <Crosshair containerRef={containerRef} color="hsl(var(--primary))" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="BLOG" 
          subtitle="Latest Insights"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <MagicCard className="group glass-card rounded-2xl p-6 transition-all duration-500 cursor-pointer h-full">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-4">
                  <Clock size={14} />
                  {article.date}
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
