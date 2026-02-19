import { motion } from "framer-motion";
import { Star, Mic, Trophy, BookCopy, Podcast } from "lucide-react";
import SectionHeading from "./SectionHeading";
import MagicCard from "./ui/MagicCard";

const milestones = [
  { icon: Star, text: "Featured in Forbes India (2021)", description: "Recognized as one of the leading voices in personal finance education." },
  { icon: Mic, text: "TEDx Speaker on Financial Discipline (2022)", description: "Delivered an inspiring talk on building sustainable financial habits." },
  { icon: Trophy, text: "Top 10 Finance Influencers Award (2023)", description: "Honored for making complex financial concepts accessible to everyone." },
  { icon: BookCopy, text: "1 Million+ Book Copies Sold", description: "Bestselling author with books translated into multiple languages." },
  { icon: Podcast, text: "Podcast Ranked #3 in Personal Finance Category", description: "Weekly podcast helping thousands make better financial decisions." },
];

const MilestonesSection = () => {
  return (
    <section id="milestones" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="MILESTONES" 
          subtitle="Achievements"
        />

        <div className="space-y-6 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MagicCard className="bg-zinc-900/90 border border-primary/20 text-white hover:border-primary/40 transition-all duration-500 backdrop-blur-sm rounded-3xl p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/20 flex items-center justify-center">
                    <milestone.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      {milestone.text}
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
