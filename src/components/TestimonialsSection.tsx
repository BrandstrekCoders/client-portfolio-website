import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Arvind completely transformed how I manage money. My investments are now structured and stress-free.",
    name: "Rahul Mehta",
    role: "Startup Founder",
  },
  {
    quote: "His book changed my perspective about wealth building. Highly practical and easy to follow.",
    name: "Sneha Kapoor",
    role: "Entrepreneur",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary tracking-widest uppercase text-sm font-medium mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            What Clients <span className="gold-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 relative group hover:gold-glow transition-all duration-500"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic font-display text-lg">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
