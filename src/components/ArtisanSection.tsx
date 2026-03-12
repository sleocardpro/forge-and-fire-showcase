import { MapPin, Shield } from "lucide-react";
import artisanImg from "@/assets/artisan-measuring.jpg";
import weldingBlueImg from "@/assets/welding-blue.jpg";
import weldingCloseImg from "@/assets/welding-close.jpg";

const ArtisanSection = () => {
  return (
    <section id="artisan" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative space-y-4">
            <div className="relative overflow-hidden rounded-xl">
              <img src={artisanImg} alt="Artisan ferronnier Ferronnerie Tornato mesurant une pièce métallique sur mesure dans son atelier à Cotignac" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Welding photos row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-xl">
                <img src={weldingBlueImg} alt="Soudure à l'arc bleue sur acier pour portail en fer forgé à Cotignac" className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img src={weldingCloseImg} alt="Travail de précision" className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold text-sm">Cotignac, Var</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="section-title text-foreground">
              Artisan <span className="text-primary">ferronnier</span> d'art
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Basé à <strong className="text-foreground">Cotignac</strong>, au cœur du Var, 
                mes équipes et moi mettons notre savoir-faire au service de vos projets depuis notre atelier.
              </p>
              <p>
                Forts de plus de <strong className="text-foreground">10 ans d'expérience</strong> et animés par une véritable passion pour la ferronnerie, 
                chaque réalisation est le fruit d'un travail de <strong className="text-foreground">précision</strong>, 
                alliant techniques traditionnelles et design contemporain.
              </p>
              <p>
                Du premier croquis à la pose finale, nous vous accompagnons pour créer des pièces <strong className="text-foreground">uniques et durables</strong>, 
                qu'elles soient de style provençal ou résolument moderne.
              </p>
            </div>

            {/* Badge intervention */}
            <div className="inline-flex items-center gap-3 bg-secondary px-5 py-3 rounded-lg border border-border">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">Intervention dans tout le Var et alentours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ArtisanSection;