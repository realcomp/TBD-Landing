const Footer = () => {
  return (
    <footer className="py-12 px-4 lg:px-8 bg-card border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">DTG Studio</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © {new Date().getFullYear()} DTG Studio. Система для спокойной головы.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
