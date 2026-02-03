import React from 'react';
import { HeartIcon } from './Icons';

const Bio: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="font-serif text-4xl text-stone-800 mb-6 relative inline-block">
            About Fiona
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-stone-300"></span>
          </h2>
          
          <p className="text-stone-600 text-lg leading-relaxed font-light">
            Born in the warm days of <strong className="font-medium text-stone-800">June 2022</strong>, Fiona was not just a pet, but a cherished member of our family. 
            With her distinctive coat of <span className="italic">black and white</span>, warmed by gentle touches of <span className="italic">brown</span>, she was a sight of pure joy.
          </p>
          
          <p className="text-stone-600 text-lg leading-relaxed font-light">
            She left us on the morning of <strong className="font-medium text-stone-800">February 2, 2026</strong>. 
            Fiona was known for her playful "popcorning" dances and her quiet, caring nature. She had a way of knowing when you needed a friend, offering gentle squeaks of encouragement.
          </p>

          <div className="pt-4 flex items-center space-x-2 text-stone-400">
            <HeartIcon className="w-5 h-5 text-red-300" />
            <span className="text-sm uppercase tracking-wider">Always Loved, Never Forgotten</span>
          </div>
        </div>
        
        <div className="flex-1 w-full grid grid-cols-2 gap-4">
           <img 
            src="pictures/bio-playing.jpg" 
            className="w-full h-64 object-cover rounded-lg shadow-md mt-8 bg-stone-200" 
            alt="Fiona playing" 
            onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/fiona1/300/400"; }}
           />
           <img 
            src="pictures/bio-sleeping.jpg" 
            className="w-full h-64 object-cover rounded-lg shadow-md bg-stone-200" 
            alt="Fiona sleeping" 
            onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/fiona2/300/400"; }}
           />
        </div>
      </div>
    </section>
  );
};

export default Bio;
