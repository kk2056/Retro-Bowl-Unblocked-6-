
import React from 'react';

interface HeaderProps {
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleFullscreen, isFullscreen }) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-white italic">RB</div>
        <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">
          Retro Bowl <span className="text-blue-500">Unblocked</span> 2025
        </h1>
      </div>
      
      <button 
        onClick={onToggleFullscreen}
        className="hidden md:flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg transition-all border border-slate-700"
      >
        <span>{isFullscreen ? 'Exit Fullscreen' : 'Go Fullscreen'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L4.414 15H6a1 1 0 110 2H2a1 1 0 01-1-1v-4a1 1 0 011-1zm14 0a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
