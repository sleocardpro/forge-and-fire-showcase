import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Images imports
import mobilierImg from "@/assets/gallery-mobilier.jpg";
import portail1 from "@/assets/portail-1.jpg";
import verriere1 from "@/assets/verriere-1.jpg";
import verriere2 from "@/assets/verriere-2.jpg";
import verriere3 from "@/assets/verriere-3.jpg";
import verriere4 from "@/assets/verriere-4.jpg";
import verriere5 from "@/assets/verriere-5.jpg";
import verriere6 from "@/assets/verriere-6.jpg";
import verriere7 from "@/assets/verriere-7.jpg";
import portail2 from "@/assets/portail-2.jpg";
import portail3 from "@/assets/portail-3.jpg";
import portail4 from "@/assets/portail-4.jpg";
import portail5 from "@/assets/portail-5.jpg";
import portail6 from "@/assets/portail-6.jpg";
import escalierGc1 from "@/assets/escalier-gc-1.jpg";
import escalierGc2 from "@/assets/escalier-gc-2.jpg";
import escalierGc3 from "@/assets/escalier-gc-3.jpg";
import escalierGc4 from "@/assets/escalier-gc-4.jpg";
import escalierGc5 from "@/assets/escalier-gc-5.jpg";
import escalierGc6 from "@/assets/escalier-gc-6.jpg";
import escalierGc7 from "@/assets/escalier-gc-7.jpg";
import escalierGc8 from "@/assets/escalier-gc-8.jpg";
import escalierGc9 from "@/assets/escalier-gc-9.jpg";
import escalierGc10 from "@/assets/escalier-gc-10.jpg";
import escalierGc11 from "@/assets/escalier-gc-11.jpg";
import escalierGc12 from "@/assets/escalier-gc-12.jpg";
import escalierGc13 from "@/assets/escalier-gc-13.jpg";
import escalierGc14 from "@/assets/escalier-gc-14.jpg";

interface ServiceData {
  title: string;
  description: string;
  images: string[];
}

const servicesData: Record<string, ServiceData> = {
  "verrieres-cloisons": {
    title: "Verrières & Cloisons",
    description: "Découvrez nos réalisations de verrières et cloisons style atelier, apportant luminosité et modernité à vos espaces intérieurs.",
    images: [verriere1, verriere2, verriere3, verriere4, verriere5, verriere6, verriere7]
  },
  "portails": {
    title: "Portails",
    description: "Nos portails sur mesure alliant sécurité, robustesse et élégance pour sublimer l'entrée de votre propriété.",
    images: [portail1, portail2, portail3, portail4, portail5, portail6]
  },
  "escaliers-garde-corps": {
    title: "Escaliers & Garde-corps",
    description: "Escaliers sur mesure et garde-corps design pour intérieurs et extérieurs. Sécurité et esthétisme au service de votre habitat.",
    images: [escalierGc1, escalierGc2, escalierGc3, escalierGc4, escalierGc5, escalierGc6, escalierGc7, escalierGc8, escalierGc9, escalierGc10, escalierGc11, escalierGc12, escalierGc13, escalierGc14]
  },
  "mobilier": {
    title: "Mobilier",
    description: "Tables, étagères et consoles. Des pièces uniques sur mesure entièrement réalisées en métal.",
    images: [mobilierImg]
  }
};

const ServiceGallery = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display text-foreground mb-4">Service non trouvé</h1>
          <Link to="/" className="text-primary hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container">
          {/* Back link */}
          <Link 
            to="/#savoir-faire" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au savoir-faire
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {service.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {service.description}
            </p>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {service.images.map((image, index) => (
              <div 
                key={index}
                className="break-inside-avoid group relative overflow-hidden rounded-xl"
              >
                <img 
                  src={image} 
                  alt={`${service.title} - Réalisation ${index + 1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Vous avez un projet similaire ? Contactez-moi pour en discuter.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceGallery;
