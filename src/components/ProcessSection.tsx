import { Pencil, Ruler, Hammer, CheckCircle } from "lucide-react";
const steps = [{
  icon: Pencil,
  title: "Écoute & Croquis",
  description: "Nous échangeons sur votre projet. Nous réalisons des croquis 2D ou sur papier pour concrétiser votre vision."
}, {
  icon: Ruler,
  title: "Conception",
  description: "Prise de mesures sur site et conception technique détaillée de votre pièce sur-mesure."
}, {
  icon: Hammer,
  title: "Fabrication",
  description: "Travail du métal en atelier : découpe, soudure, forge, finitions avec un soin artisanal."
}, {
  icon: CheckCircle,
  title: "Pose & Livraison",
  description: "Installation professionnelle chez vous et vérification finale pour une satisfaction totale."
}];
const ProcessSection = () => {
  return <section id="processus" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Notre <span className="text-primary">processus</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De l'idée à la réalisation, nous vous accompagnons à chaque étape pour créer une pièce unique qui vous ressemble.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => <div key={index} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />}
              
              <div className="card-forge p-6 rounded-xl text-center h-full">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mt-2">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProcessSection;