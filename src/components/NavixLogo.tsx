// 👉 INSTRUCCIÓN PARA CAMBIAR TU LOGO:
// 1. Coloca tu imagen (PNG, JPG, SVG o WebP) en la carpeta 'src/assets/'
import logoFile from "@/assets/navix-logo.png";

interface NavixLogoProps {
  className?: string;
  showText?: boolean;
}

export function NavixLogo({
  className = "w-12 h-12 md:w-14 md:h-14",
  showText = false,
}: NavixLogoProps) {
  return (
    <div className="flex items-center gap-3.5 select-none">
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <img
          src={logoFile}
          alt="Navix Logo"
          className="w-full h-full object-contain rounded-xl shadow-glow transition-transform hover:scale-105 duration-200"
          onError={(e) => {
            // Fallback elegante en caso de que la imagen no cargue
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      {showText && (
        <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground">
          Navix
        </span>
      )}
    </div>
  );
}
