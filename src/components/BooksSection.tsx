import { motion } from "framer-motion";
import bookFreedomPortfolio from "@/assets/book-freedom-portfolio.jpg";
import bookSmartMoney from "@/assets/book-smart-money.jpg";
import bookWealthWithoutNoise from "@/assets/book-wealth-without-noise.jpg";

const books = [
  {
    title: "The Freedom Portfolio",
    description: "A step-by-step guide to building a stress-free long-term investment strategy.",
    year: "2018",
    image: bookFreedomPortfolio,
  },
  {
    title: "Smart Money Habits",
    description: "Behavioral finance techniques to master spending, saving, and investing.",
    year: "2020",
    image: bookSmartMoney,
  },
  {
    title: "Wealth Without Noise",
    description: "Simplifying financial planning in a world full of distractions.",
    year: "2023",
    image: bookWealthWithoutNoise,
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
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary tracking-widest uppercase text-sm font-medium mb-4">Publications</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Published <span className="gold-text">Works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group glass-card rounded-2xl overflow-hidden hover:gold-glow transition-all duration-500"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
