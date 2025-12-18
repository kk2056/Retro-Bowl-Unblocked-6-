
import React from 'react';
import { GAME_URL } from '../constants';

const GameFrame: React.FC = () => {
  return (
    <iframe
      src={GAME_URL}
      id="retro-bowl-game"
      className="w-full h-full border-0"
      title="Retro Bowl Unblocked Game"
      allow="autoplay; fullscreen; keyboard"
      sandbox="allow-scripts allow-same-origin allow-modals allow-popups"
      loading="lazy"
    ></iframe>
  );
};

export default GameFrame;
