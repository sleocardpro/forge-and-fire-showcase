import { Phone, Mail, MapPin, Clock } from "lucide-react";
const Footer = () => {
  return <footer id="contact" className="bg-forge-dark border-t border-border">
      {/* Contact Section */}
      <div className="container py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            <span className="text-primary">Contactez</span>-moi
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Un projet en tête ? Demandez votre devis gratuit et sans engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <a href="tel:+33600000000" className="card-forge p-6 rounded-xl text-center group">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Téléphone
            </h3>
            <p className="text-primary font-medium">06 00 00 00 00</p>
          </a>

          {/* Email */}
          <a href="mailto:contact@ferronnerie-tornato.fr" className="card-forge p-6 rounded-xl text-center group">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Email
            </h3>
            <p className="text-muted-foreground text-sm">contact@ferronnerie-tornato.fr</p>
          </a>

          {/* Address */}
          <div className="card-forge p-6 rounded-xl text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Adresse
            </h3>
            <p className="text-muted-foreground text-sm">Zone Artisanale Loup à loup,
83570 Cotignac<br />
              83570 Cotignac
            </p>
          </div>

          {/* Hours */}
          <div className="card-forge p-6 rounded-xl text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Horaires
            </h3>
            <p className="text-muted-foreground text-sm">
              Lun - Ven : 8h - 18h<br />
              Sam : Sur RDV
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Ferronnerie Tornato. Tous droits réservés.
          </p>
          <p className="text-muted-foreground text-sm">
            Artisan métallier à Cotignac (83) - Var, Provence
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;