import { motion } from "framer-motion";
import { BookOpen, Users, Award, Presentation } from "lucide-react";
import SectionHeading from "./SectionHeading";
import MagicCard from "./ui/MagicCard";
import Hyperspeed from "./ui/Hyperspeed";

const stats = [
  { icon: BookOpen, value: "15+", label: "Years Experience" },
  { icon: Users, value: "5,000+", label: "Clients Guided" },
  { icon: Award, value: "3", label: "Bestselling Books" },
  { icon: Presentation, value: "120+", label: "Workshops Conducted" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-black">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Hyperspeed />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="ABOUT" 
          subtitle="Get to know"
        />

        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-secondary-foreground/80 leading-relaxed text-lg mb-6">
            With over 15 years of experience in financial advisory and behavioral wealth coaching, Arvind has helped more than 5,000 individuals and entrepreneurs build disciplined, stress-free financial systems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            His philosophy blends traditional wealth principles with modern investment strategies, empowering clients to achieve financial independence without sacrificing life enjoyment.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <MagicCard className="glass-card rounded-xl p-6 text-center group transition-all duration-500">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-display font-bold gold-text mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
