
import React from 'react';

interface AdSlotProps {
  position: 'top' | 'bottom';
}

const AdSlot: React.FC<AdSlotProps> = ({ position }) => {
  return (
    <div className={`flex items-center justify-center bg-slate-800/20 border border-dashed border-slate-700 text-slate-600 rounded-md overflow-hidden ${
      position === 'top' ? 'w-[728px] h-[90px] max-w-full' : 'w-[970px] h-[250px] max-w-full'
    }`}>
      <div className="text-center p-2">
        <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Advertisement</p>
        <p className="text-xs">Place AdSense Code Here</p>
      </div>
    </div>
  );
};

export default AdSlot;
