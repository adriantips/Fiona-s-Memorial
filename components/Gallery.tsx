import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "pictures/gallery-1.jpg",
    "pictures/gallery-2.jpg",
    "pictures/gallery-3.jpg",
    "pictures/gallery-4.jpg",
    "pictures/gallery-5.jpg",
    "pictures/gallery-6.jpg",
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl text-center text-stone-800 mb-12">Cherished Memories</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-stone-100">
              <img 
                src={src} 
                alt={`Memory ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 aspect-square"
                loading="lazy"
                onError={(e) => { 
                  // Visual indicator that image is missing but preserving layout
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'text-stone-400');
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerText = "Add photo: " + src.split('/').pop();
                  }
                }}
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
