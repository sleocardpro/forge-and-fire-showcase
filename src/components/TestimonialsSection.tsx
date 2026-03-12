import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Nous avons fait appel à Ferronnerie Tornato pour un escalier sur mesure. Le résultat dépasse nos attentes. Finitions parfaites.",
    author: "Marc D.",
  },
  {
    text: "Très bon contact, respect des délais et surtout un vrai savoir-faire. Je recommande pour vos portails.",
    author: "Sophie L.",
  },
  {
    text: "Artisan sérieux à Cotignac. Le garde-corps est superbe.",
    author: "Jean-Pierre B.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            Avis clients <span className="text-primary">ferronnerie</span> Cotignac
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Retrouvez nos avis vérifiés sur Google.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">Avis Google</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
