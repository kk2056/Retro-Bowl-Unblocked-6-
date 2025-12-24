
import React, { useState, useRef, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GameFrame from './components/GameFrame';
import AdSlot from './components/AdSlot';

const App: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Sync state if user exits fullscreen via ESC key
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Top Ad Slot */}
      <div className="w-full flex justify-center py-2 bg-slate-950/50">
        <AdSlot position="top" />
      </div>

      <Header onToggleFullscreen={toggleFullscreen} isFullscreen={isFullscreen} />

      <main className="flex-grow flex flex-col items-center justify-center p-0 md:p-4 w-full">
        {/* Game Player Container */}
        <div 
          ref={containerRef}
          className={`relative w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-lg overflow-hidden border border-slate-700 transition-all duration-300 ${
            isFullscreen ? 'fixed inset-0 z-50 max-w-none rounded-none border-none' : ''
          }`}
        >
          <GameFrame />
          
          {/* Floating Fullscreen toggle inside frame for quick access */}
          <button 
            onClick={toggleFullscreen}
            className="absolute bottom-4 right-4 bg-slate-800/80 hover:bg-blue-600 text-white p-2 rounded-full backdrop-blur-sm transition-colors md:hidden"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            )}
          </button>
        </div>

        {/* Strategy Section */}
        <div className="strategy mt-8 text-gray-300 p-4 bg-gray-800 rounded-lg max-w-5xl w-full">
          Are you ready to lead your team to the Super Bowl? Retro Bowl Unblocked 2025 is the perfect blend of retro pixel art and deep American football strategy. It’s not just about throwing the perfect pass; it’s about managing your franchise. As both coach and general manager, you must handle the press, keep player morale high, draft new talent, and manage the salary cap.
          <br /><br />
          Core Strategy: Rookies often focus only on the gameplay, but management is key. Early on, invest in your Rehab and Training facilities to prevent injuries and boost XP. During matches, Clock Management is essential. Don't always go for the Hail Mary; short, steady passes win games. This is the ultimate time-killer for football fans in school during 2025.
        </div>

        {/* Other Games Section */}
        <div className="other-games mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 max-w-5xl w-full mb-12">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">More Unblocked Games 2025</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
                <li className="mb-2"><a href="https://snakegame.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Snake Game Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Zero Lag Games Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Free Games Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://nodownload2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play No Download Games Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Unblocked Games 2025 (Main)</a></li>
                <li className="mb-2"><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Best Unblocked Games 2025</a></li>
                <li className="mb-2"><a href="https://promax.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play ProMax Games Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Retro Bowl Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play 1v1.LOL Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://drift2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://slope2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Slope Game Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://gd2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://motox3m2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Moto X3M Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://surfers2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://run32025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Run 3 Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://fireboy2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Fireboy & Watergirl Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://paperio2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Paper.io Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://driftbest2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters MAX Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://gd-full2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Full Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://subway2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers World Unblocked 2025</a></li>
            </ul>
        </div>
      </main>

      {/* Bottom Ad Slot */}
      <div className="w-full flex justify-center py-4 bg-slate-950/50 border-t border-slate-800">
        <AdSlot position="bottom" />
      </div>

      <Footer />
    </div>
  );
};

export default App;
