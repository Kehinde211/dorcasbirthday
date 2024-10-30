// pages/index.js
import { Gift, BookOpen, Heart, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [unwrapped, setUnwrapped] = useState(false);
  const [wobble, setWobble] = useState(false);
  
  // Replace this with your PDF sharing link from Google Drive/Dropbox
  const bookLink = "YOUR_PDF_LINK_HERE";

  const handleUnwrap = () => {
    setWobble(true);
    setTimeout(() => {
      setUnwrapped(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-100 to-pink-100">
      {unwrapped ? (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-lg space-y-6 max-w-md mx-auto">
          <BookOpen className="w-16 h-16 text-pink-500" />
          <h1 className="text-2xl font-bold text-gray-800">Happy Birthday! 🎉</h1>
          <p className="text-gray-600">I hope you enjoy this special book I picked for you!</p>
          
          <a 
            href={bookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors w-full max-w-sm"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Open Your Gift</span>
          </a>

          <div className="flex space-x-2">
            <Heart className="text-red-500" />
            <Heart className="text-red-500" />
            <Heart className="text-red-500" />
          </div>
        </div>
      ) : (
        <div 
          className={`flex flex-col items-center justify-center p-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 ${wobble ? 'animate-bounce' : ''}`}
          onClick={handleUnwrap}
        >
          <Gift className="w-16 h-16 text-white mb-4" />
          <p className="text-white text-lg font-medium">Click to unwrap your birthday gift!</p>
          <div className="mt-4 flex space-x-2">
            <Heart className="text-white" />
            <Heart className="text-white" />
            <Heart className="text-white" />
          </div>
        </div>
      )}
    </main>
  );
}
