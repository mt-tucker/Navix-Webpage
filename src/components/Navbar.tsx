import { Button } from "@/components/ui/button";

interface NavbarProps {
  scrollTo: (id: string) => void;
}

export function Navbar({ scrollTo }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 font-display font-bold text-lg cursor-pointer" onClick={() => scrollTo("hero")}>
          <div
            aria-label="Navix logo placeholder"
            className="w-10 h-10 rounded-full bg-gradient-hero shadow-glow ring-2 ring-primary-foreground/40"
          />
          Navix
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <button
            onClick={() => scrollTo("como")}
            className="hover:text-foreground transition-smooth"
          >
            How it works
          </button>
          <button
            onClick={() => scrollTo("para-quien")}
            className="hover:text-foreground transition-smooth"
          >
            Who it's for
          </button>
          <button
            onClick={() => scrollTo("precios")}
            className="hover:text-foreground transition-smooth"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollTo("feedback")}
            className="hover:text-foreground transition-smooth"
          >
            Beta & Feedback
          </button>
        </nav>
        <Button size="sm" onClick={() => scrollTo("feedback")}>
          Join Beta
        </Button>
      </div>
    </header>
  );
}
