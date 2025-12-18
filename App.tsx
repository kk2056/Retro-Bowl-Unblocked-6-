
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

      <main className="flex-grow flex flex-col items-center justify-center p-0 md:p-4">
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

        {/* SEO Text Content */}
        <section className="max-w-4xl mt-12 px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Retro Bowl Unblocked 2025: Why Play Here?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Retro Bowl is the perfect game for fans of American football who love a touch of nostalgia. 
            In 2025, our unblocked version ensures that you can enjoy managing your team and dominating the gridiron even from school or restricted networks. 
            With its charming pixel graphics and addictive gameplay, it's a touchdown every time.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">Game Features</h3>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Complete roster management</li>
                <li>Strategic playcalling</li>
                <li>Dynamic weather conditions</li>
                <li>Pixel-perfect retro aesthetics</li>
                <li>Mobile-responsive controls</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">Controls</h3>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li><span className="text-blue-400">Mouse/Touch:</span> Aim and throw the ball</li>
                <li><span className="text-blue-400">WASD/Arrows:</span> Dodge and dive</li>
                <li><span className="text-blue-400">Space:</span> Snap the ball</li>
                <li><span className="text-blue-400">Esc:</span> Pause game</li>
              </ul>
            </div>
          </div>
        </section>
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
