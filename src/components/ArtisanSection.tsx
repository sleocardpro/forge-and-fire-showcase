import { MapPin, Shield } from "lucide-react";
import artisanImg from "@/assets/artisan-measuring.jpg";
const ArtisanSection = () => {
  return <section id="artisan" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl">
              <img src={artisanImg} alt="L'artisan métallier au travail" className="w-full h-auto object-cover" />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold text-sm">Cotignac, Var</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="section-title text-foreground">
              L'<span className="text-primary">Artisan</span>
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Basé à <strong className="text-foreground">Cotignac</strong>, au cœur du Var, 
                je mets mon savoir-faire au service de vos projets depuis mon atelier.
              </p>
              <p>
                Chaque réalisation est le fruit d'un travail de <strong className="text-foreground">précision</strong>, 
                alliant techniques traditionnelles de ferronnerie et design contemporain.
              </p>
              <p>Du premier croquis à la pose finale, je vous accompagne pour créer des pièces uniques et durables, qu'elles soient de style provençal ou résolument moderne.<strong className="text-foreground">uniques et durables</strong>, 
                qu'elles soient de style provençal ou résolument moderne.
              </p>
            </div>

            {/* Badge intervention */}
            <div className="inline-flex items-center gap-3 bg-secondary px-5 py-3 rounded-lg border border-border">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">Intervention dans tout le Var et alentours</span>
            </div>

            {/* Zones */}
            <p className="text-muted-foreground text-sm">
          </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ArtisanSection;