import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-lg font-bold tracking-wider text-foreground uppercase md:text-4xl">
            Ferronnerie Tornato
          </span>
        </a>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:text-primary hover:bg-primary/10" asChild>
            <a href="tel:+33600000000" aria-label="Appeler">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          
          <Button variant="outline" className="hidden md:flex items-center gap-2 border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all duration-300" asChild>
            <a href="tel:+33600000000">
              <Phone className="h-4 w-4" />
              <span>06 00 00 00 00</span>
            </a>
          </Button>

          <Button className="btn-fire text-sm md:text-base flex items-center gap-2" asChild>
            <a href="#contact">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Devis Gratuit</span>
              <span className="sm:hidden">Devis</span>
            </a>
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;