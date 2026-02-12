import { motion } from "framer-motion";
import { UserCheck, Briefcase, Building2 } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "One-on-One Wealth Coaching",
    description: "Personalized financial planning and investment structuring tailored to your goals and risk profile.",
  },
  {
    icon: Briefcase,
    title: "Financial Planning for Entrepreneurs",
    description: "Cashflow systems, tax efficiency, and long-term scaling strategies for business owners.",
  },
  {
    icon: Building2,
    title: "Corporate Financial Literacy Workshops",
    description: "Interactive sessions for organizations to improve employee financial wellness and retention.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary tracking-widest uppercase text-sm font-medium mb-4">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="gold-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group glass-card rounded-2xl p-8 hover:gold-glow transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
