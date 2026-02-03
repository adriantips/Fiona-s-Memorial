import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-900 text-stone-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="pictures/hero-background.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
          onError={(e) => {
            // Fallback if image is missing so the user knows what to do
            e.currentTarget.src = "https://picsum.photos/1920/1080?grayscale&blur=2"; 
            console.warn("Missing pictures/hero-background.jpg");
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/20 to-stone-50" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl fade-in">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl mb-8 bg-stone-800">
          <img 
            src="pictures/fiona-main.jpg" 
            alt="Fiona the Guinea Pig" 
            className="w-full h-full object-cover"
            onError={(e) => {
               e.currentTarget.src = "https://picsum.photos/id/1025/500/500";
               console.warn("Missing pictures/fiona-main.jpg");
            }}
          />
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 text-white drop-shadow-lg">
          Fiona
        </h1>
        
        <div className="flex items-center space-x-4 text-lg md:text-xl font-light tracking-widest uppercase opacity-90">
          <span>June 2022</span>
          <span className="w-12 h-[1px] bg-white/50"></span>
          <span>February 2, 2026</span>
        </div>

        <p className="mt-8 text-stone-200 font-serif italic text-xl md:text-2xl max-w-2xl">
          "A playful soul, a loving heart, forever hopping through our memories."
        </p>
      </div>
      
      <div className="absolute bottom-10 z-10 animate-bounce text-stone-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
