import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="DTG Studio Logo" className="w-9 h-9 object-contain" />
            <span className="text-lg font-bold text-foreground">DTG Studio</span>
          </div>

          <Button onClick={scrollToWaitlist} size="sm" className="shadow-soft">
            Вступить в лист ожидания
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
