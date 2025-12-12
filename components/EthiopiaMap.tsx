
import React from 'react';
import { regionsData } from '../data/regions';

interface EthiopiaMapProps {
  selectedRegionId: string | null;
  onSelectRegion: (id: string) => void;
}

export function EthiopiaMap({ selectedRegionId, onSelectRegion }: EthiopiaMapProps) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg 
        viewBox="0 0 800 600" 
        className="w-full h-auto max-h-[600px] drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))' }}
      >
        <path 
          d="M250,150 L550,100 L700,250 L750,350 L650,550 L350,580 L150,450 L100,250 Z" 
          fill="rgba(255,255,255,0.05)" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="2"
        />

        {regionsData.map((region) => {
          const isSelected = selectedRegionId === region.id;
          return (
            <g 
              key={region.id} 
              onClick={() => onSelectRegion(region.id)}
              className="cursor-pointer transition-all duration-300 group"
            >
              <path
                d={region.path}
                fill={isSelected ? '#c8a46e' : 'rgba(255,255,255,0.1)'}
                stroke={isSelected ? '#fff' : '#c8a46e'}
                strokeWidth={isSelected ? 3 : 1}
                className="transition-all duration-300 group-hover:fill-[#c8a46e] group-hover:fill-opacity-80"
              />
              <circle 
                cx={region.cx} 
                cy={region.cy} 
                r={isSelected ? 6 : 4} 
                fill={isSelected ? '#fff' : '#c8a46e'}
                className="transition-all duration-300"
              />
              <text
                x={region.cx}
                y={parseInt(region.cy) - 15}
                textAnchor="middle"
                className={`text-sm font-bold uppercase tracking-wider fill-white transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}
                style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.8)' }}
              >
                {region.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
