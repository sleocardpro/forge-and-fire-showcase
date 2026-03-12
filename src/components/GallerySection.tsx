import { useState } from "react";
import weldingBlueImg from "@/assets/welding-blue.jpg";
import weldingCloseImg from "@/assets/welding-close.jpg";
import artisanImg from "@/assets/artisan-measuring.jpg";
const galleryImages = [{
  src: weldingBlueImg,
  alt: "Soudure à l'arc sur pièce en acier dans l'atelier Ferronnerie Tornato à Cotignac",
  tall: true
}, {
  src: artisanImg,
  alt: "Artisan ferronnier prenant les mesures pour une création métallique sur mesure à Cotignac",
  tall: true
}, {
  src: weldingCloseImg,
  alt: "Travail de précision sur soudure de ferronnerie d'art dans le Var",
  tall: false
}];
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return <section id="galerie" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-foreground mb-4">
            Nos <span className="text-primary">réalisations</span> en ferronnerie
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Découvrez mes réalisations : un savoir-faire artisanal au service de vos projets.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => <div key={index} className="gallery-item break-inside-avoid cursor-pointer" onClick={() => setSelectedImage(image.src)}>
              <img src={image.src} alt={image.alt} className="w-full rounded-lg object-cover hover:opacity-90 transition-opacity" loading="lazy" />
            </div>)}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-foreground/60 hover:text-foreground text-4xl" onClick={() => setSelectedImage(null)}>
            ×
          </button>
          <img src={selectedImage} alt="Réalisation ferronnerie d'art Tornato - vue agrandie" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        </div>}
    </section>;
};
export default GallerySection;