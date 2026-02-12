const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-lg font-bold">
            <span className="gold-text">Arvind</span>
            <span className="text-foreground"> Raman</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#books" className="hover:text-primary transition-colors">Books</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Arvind Raman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
