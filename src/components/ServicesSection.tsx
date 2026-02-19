import { motion } from "framer-motion";
import { UserCheck, Briefcase, Building2, PiggyBank, TrendingUp, Calculator, LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import MagicCard from "./ui/MagicCard";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
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
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description: "Strategic planning for a secure retirement with optimized savings, investments, and income streams.",
  },
  {
    icon: TrendingUp,
    title: "Investment Portfolio Management",
    description: "Expert portfolio diversification and management to maximize returns while minimizing risk exposure.",
  },
  {
    icon: Calculator,
    title: "Tax Optimization Strategy",
    description: "Strategic tax planning to minimize liabilities and maximize wealth retention through legal avenues.",
  },
];

const ServicesSection = () => {
  // Duplicate services array for seamless loop
  const duplicatedServices = [...services, ...services];

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="SERVICES" 
          subtitle="What I Offer"
        />

        <div className="mt-16 relative">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -((280 + 32) * services.length)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedServices.map((service, i) => (
                <MagicCard
                  key={i}
                  className="glass-card rounded-xl p-6 w-[280px] h-[240px] flex flex-col items-center text-center flex-shrink-0"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                </MagicCard>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
