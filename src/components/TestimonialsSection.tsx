import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import arvindPortrait from "@/assets/arvind-portrait.jpg"; // Reusing portrait for avatar
import SectionHeading from "./SectionHeading";
import MagicCard from "./ui/MagicCard";

const testimonials = [
  {
    content: "Arvind's strategic approach to wealth management is simply unparalleled. He turned our chaotic Lovable into a high-performing asset engine.",
    author: "Rahul Mehta",
    role: "Startup Founder",
    className: "md:col-span-2 bg-zinc-900 text-white border border-primary/20",
    dark: true,
  },
  {
    content: "Speed, clarity, and absolute integrity. The best financial decision I've ever made.",
    author: "Sneha Kapoor",
    role: "Entrepreneur",
    className: "md:col-span-1 bg-zinc-800 text-white border border-border/50",
    dark: true,
  },
  {
    content: "He doesn't just manage money; he manages mindset. A truly transformative experience.",
    author: "Vikram Malhotra",
    role: "CEO, TechFlow",
    className: "md:col-span-1 bg-zinc-800 text-white border border-primary/20",
    dark: true,
  },
  {
    content: "Reliable. Responsive. Remarkable. The returns speak for themselves, but the peace of mind is priceless.",
    author: "Ananya Deshmukh",
    role: "Director, Creative Arts",
    className: "md:col-span-2 bg-zinc-900 text-white border border-primary/20",
    dark: true,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="TESTIMONIALS" 
          subtitle="Client Stories"
        />

        <motion.p 
          {...fadeInUp} 
          transition={{ duration: 0.6 }} 
          className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-16"
        >
          Real stories from clients who have redefined their financial future.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={t.className}
            >
              <MagicCard className="rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group transition-transform duration-500 h-full">
                <Quote className={`w-12 h-12 mb-6 ${t.dark ? 'text-primary' : 'text-primary/40'}`} />

                <p className="font-display text-2xl md:text-3xl font-medium leading-tight mb-8 text-white">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    {/* Placeholder avatar, using portrait for demo or abstract */}
                    <img src={arvindPortrait} alt={t.author} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-sm text-white/70">{t.role}</p>
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

export default TestimonialsSection;
