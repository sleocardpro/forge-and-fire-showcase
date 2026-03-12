import { Link } from "react-router-dom";
import verriere1 from "@/assets/verriere-1.jpg";
import portail2 from "@/assets/portail-2.jpg";
import escalierGc3 from "@/assets/escalier-gc-3.jpg";
import mobilier1 from "@/assets/mobilier-1.jpg";
import pergola1 from "@/assets/pergola-1.jpg";

const services = [{
  title: "Verrières & Cloisons",
  description: "Style atelier d'artiste, luminosité et modernité pour votre intérieur.",
  image: verriere1,
  slug: "verrieres-cloisons"
}, {
  title: "Portails",
  description: "Portails sur mesure alliant sécurité, robustesse et élégance pour votre propriété.",
  image: portail2,
  slug: "portails"
}, {
  title: "Escaliers & Garde-corps",
  description: "Escaliers sur mesure et garde-corps design pour intérieurs et extérieurs.",
  image: escalierGc3,
  slug: "escaliers-garde-corps"
}, {
  title: "Mobilier",
  description: "Tables, étagères, consoles. Pièces uniques sur mesure en métal.",
  image: mobilier1,
  slug: "mobilier"
}, {
  title: "Pergolas",
  description: "Pergolas sur mesure en métal pour sublimer vos espaces extérieurs.",
  image: pergola1,
  slug: "pergolas"
}];

const ServicesSection = () => {
  return (
    <section id="savoir-faire" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-foreground mb-4">
            Portails en fer forgé, <span className="text-primary">verrières</span> & créations métalliques
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Chaque projet est unique, réalisé avec passion et précision dans notre atelier à Cotignac.
          </p>
          <p className="text-muted-foreground/70 text-sm mt-3 italic">
            👉 Cliquez sur une catégorie pour découvrir toutes nos réalisations en photos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={`/savoir-faire/${service.slug}`}
              className="block"
            >
              <article
                className="card-forge group rounded-xl overflow-hidden opacity-0 animate-fade-in-up cursor-pointer h-full"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
