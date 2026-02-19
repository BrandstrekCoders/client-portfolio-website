import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className = "" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className}`}
    >
      {subtitle && (
        <p className="text-primary tracking-widest uppercase text-sm font-medium mb-4">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-white mb-6">
        {title}
      </h2>
      
      {/* Centered dot below heading */}
      <div className="flex justify-center">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default SectionHeading;