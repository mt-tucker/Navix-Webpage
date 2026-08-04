export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div
            aria-label="Navix logo placeholder"
            className="w-8 h-8 rounded-full bg-gradient-hero shadow-glow"
          />
          <span className="font-display font-semibold text-foreground">Navix</span>
          <span>· MVP 2026</span>
        </div>
      </div>
    </footer>
  );
}
