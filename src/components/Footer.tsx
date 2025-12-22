import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          © {currentYear} Sattvik Sharma. Built with
          <Heart className="h-4 w-4 text-primary fill-primary" />
        </p>
      </div>
    </footer>
  );
}
