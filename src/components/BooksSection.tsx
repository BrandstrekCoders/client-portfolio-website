import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import MagicCard from "./ui/MagicCard";

const books = [
  {
    title: "The Freedom Portfolio",
    description: "A step-by-step guide to building a stress-free long-term investment strategy.",
    year: "2018",
    image: "/assets/book-freedom-portfolio-white.svg",
  },
  {
    title: "Smart Money Habits",
    description: "Behavioral finance techniques to master spending, saving, and investing.",
    year: "2020",
    image: "/assets/book-smart-money-white.svg",
  },
  {
    title: "Wealth Without Noise",
    description: "Simplifying financial planning in a world full of distractions.",
    year: "2023",
    image: "/assets/book-wealth-white.svg",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const BooksSection = () => {
  return (
    <section id="books" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="BOOKS" 
          subtitle="Publications"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <MagicCard className="glass-card rounded-2xl overflow-hidden group transition-all duration-500">
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold backdrop-blur-md">
                    {book.year}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-semibold text-foreground">{book.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{book.description}</p>
                  <button className="text-sm text-primary font-medium hover:underline underline-offset-4 transition-all">
                    View Details →
                  </button>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
