import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

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
  return (
    <section id="blog" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary tracking-widest uppercase text-sm font-medium mb-4">Blog</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Latest <span className="gold-text">Insights</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-6 hover:gold-glow transition-all duration-500 cursor-pointer"
            >
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
