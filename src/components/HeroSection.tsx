import { ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sparks.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0" />
      
      {/* Subtle gradient glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-20">
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight opacity-0 animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>L'Art du métal à Cotignac
        <br />
          <span className="text-primary"></span> à Cotignac
        </h1>
        
        

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{
        animationDelay: "0.6s"
      }}>
          <Button variant="outline" size="lg" className="btn-outline-light group w-full sm:w-auto" asChild>
            <a href="#galerie" className="flex items-center gap-2">
              Voir mes réalisations
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </Button>
          
          <Button size="lg" className="btn-fire w-full sm:w-auto flex items-center gap-2" asChild>
            <a href="#contact">
              <MessageCircle className="h-4 w-4" />
              Me contacter
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{
      animationDelay: "1s"
    }}>
        <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;