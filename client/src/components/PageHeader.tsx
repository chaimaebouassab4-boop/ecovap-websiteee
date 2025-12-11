import { useState, useEffect } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  const defaultImage = '/testimonials/servvvvv.jpg';
  const imageUrl = backgroundImage || defaultImage;
  const [imageLoaded, setImageLoaded] = useState(false);

  // Précharger l'image
  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(false);
      img.src = imageUrl;
    }
  }, [imageUrl]);

  return (
    <div className="relative bg-[#082025] text-white py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      {imageUrl && (
        <>
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          {/* Overlay léger pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 bg-[#082025]/30 z-[1]"></div>
        </>
      )}
      
      {/* Fallback background si pas d'image */}
      {!imageUrl && (
        <div className="absolute inset-0 bg-[#082025] z-0"></div>
      )}
      
      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
        {description && (
          <p className="text-lg text-gray-100 max-w-2xl mx-auto drop-shadow-md">{description}</p>
        )}
      </div>
    </div>
  );
}
