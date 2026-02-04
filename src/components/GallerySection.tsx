import { useState } from "react";
import verriereImg from "@/assets/gallery-verriere.jpg";
import escalierImg from "@/assets/gallery-escalier.jpg";
import portailImg from "@/assets/gallery-portail.jpg";
import mobilierImg from "@/assets/gallery-mobilier.jpg";
import detailImg from "@/assets/gallery-detail.jpg";
import gardeCorpsImg from "@/assets/gallery-garde-corps.jpg";
import weldingBlueImg from "@/assets/welding-blue.jpg";
import weldingCloseImg from "@/assets/welding-close.jpg";
const galleryImages = [{
  src: verriereImg,
  alt: "Verrière style atelier",
  tall: true
}, {
  src: escalierImg,
  alt: "Escalier hélicoïdal",
  tall: true
}, {
  src: weldingBlueImg,
  alt: "Soudure à l'arc",
  tall: false
}, {
  src: portailImg,
  alt: "Portail provençal",
  tall: false
}, {
  src: detailImg,
  alt: "Détail de soudure",
  tall: false
}, {
  src: mobilierImg,
  alt: "Table industrielle",
  tall: false
}, {
  src: gardeCorpsImg,
  alt: "Garde-corps moderne",
  tall: true
}, {
  src: weldingCloseImg,
  alt: "Travail de précision",
  tall: false
}];
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return <section id="galerie" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-foreground mb-4">
            La <span className="text-primary">galerie</span>
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
          <img src={selectedImage} alt="Vue agrandie" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        </div>}
    </section>;
};
export default GallerySection;