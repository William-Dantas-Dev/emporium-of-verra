// components/Arrow.tsx
import React from 'react';

type ArrowProps = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

const Arrow: React.FC<ArrowProps> = ({ startX, startY, endX, endY }) => {
  const arrowPath = `M ${startX} ${startY} L ${endX} ${endY}`;

  return (
    <svg className="absolute" style={{ zIndex: -1, top: 0, left: 0 }} width="100%" height="100%" viewBox={`0 0 ${endX} ${endY}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
      <path d={arrowPath} stroke="black" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
    </svg>
  );
};

export default Arrow;
