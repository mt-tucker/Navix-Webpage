import { NavixLogo } from "@/components/NavixLogo";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <NavixLogo className="w-9 h-9" />
          <span className="font-display font-semibold text-foreground text-base">Navix</span>
          <span>· MVP 2026</span>
        </div>
      </div>
    </footer>
  );
}
