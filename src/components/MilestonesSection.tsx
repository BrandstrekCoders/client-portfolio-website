import { motion } from "framer-motion";
import { Star, Mic, Trophy, BookCopy, Podcast } from "lucide-react";

const milestones = [
  { icon: Star, text: "Featured in Forbes India (2021)" },
  { icon: Mic, text: "TEDx Speaker on Financial Discipline (2022)" },
  { icon: Trophy, text: "Top 10 Finance Influencers Award (2023)" },
  { icon: BookCopy, text: "1 Million+ Book Copies Sold" },
  { icon: Podcast, text: "Podcast Ranked #3 in Personal Finance Category" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const MilestonesSection = () => {
  return (
    <section id="milestones" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary tracking-widest uppercase text-sm font-medium mb-4">Achievements</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="gold-text">Milestones</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.text}
              {...fadeInUp}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group glass-card rounded-xl p-5 flex items-center gap-5 hover:gold-glow transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <milestone.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium text-foreground">{milestone.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
