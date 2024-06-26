"use client";
import { useEffect, useState } from 'react';
import { Coord, boxes, FighterConnections } from '@/constants/skillTree';

const SkillTreeCalculator: React.FC<{ selectedClass: string }> = ({ selectedClass }) => {
  const [lineCoords, setLineCoords] = useState<Coord[]>([]);
  const [unlockedBoxes, setUnlockedBoxes] = useState<number[]>(boxes.filter(box => !FighterConnections.some(conn => conn.endId === box.id)).map(box => box.id));
  const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [maxPoints, setMaxPoints] = useState(50);
  const [remainingPoints, setRemainingPoints] = useState(maxPoints);

  useEffect(() => {
    const calculateCoords = () => {
      const container = document.getElementById('skill-tree-container');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const newCoords: Coord[] = [];
      boxes.forEach((box) => {
        const element = document.getElementById(`box-${box.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          newCoords.push({
            id: box.id,
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top,
          });
        }
      });
      setLineCoords(newCoords);
    };

    calculateCoords();
    window.addEventListener('resize', calculateCoords);
    window.addEventListener('scroll', calculateCoords);
    return () => {
      window.removeEventListener('resize', calculateCoords);
      window.removeEventListener('scroll', calculateCoords);
    };
  }, []);

  useEffect(() => {
    setRemainingPoints(maxPoints - selectedBoxes.length);
  }, [selectedBoxes, maxPoints]);

  const getLine = (startId: number, midId: number | undefined, endId: number, startAnchor: string = 'bottom', endAnchor: string = 'top') => {
    const start = lineCoords.find((coord) => coord.id === startId);
    const mid = midId !== undefined ? lineCoords.find((coord) => coord.id === midId) : undefined;
    const end = lineCoords.find((coord) => coord.id === endId);
    const boxSize = 28;
    const offset = 10;

    if (start && end) {
      const isSelected = selectedBoxes.includes(startId);
      const strokeColor = isSelected ? (selectedBoxes.includes(endId) ? "yellow" : "white") : "gray";

      let startX = start.x;
      let startY = start.y;

      switch (startAnchor) {
        case 'top':
          startX = start.x;
          startY = start.y - boxSize / 2 - offset;
          break;
        case 'bottom':
          startX = start.x;
          startY = start.y + boxSize / 2 + offset;
          break;
        case 'left':
          startX = start.x - boxSize / 2 - offset;
          startY = start.y;
          break;
        case 'right':
          startX = start.x + boxSize / 2 + offset;
          startY = start.y;
          break;
        default:
          break;
      }

      let endX = end.x;
      let endY = end.y;

      switch (endAnchor) {
        case 'top':
          endX = end.x;
          endY = end.y - boxSize / 2 - offset;
          break;
        case 'bottom':
          endX = end.x;
          endY = end.y + boxSize / 2 + offset;
          break;
        case 'left':
          endX = end.x - boxSize / 2 - offset;
          endY = end.y;
          break;
        case 'right':
          endX = end.x + boxSize / 2 + offset;
          endY = end.y;
          break;
        default:
          break;
      }

      if (mid) {
        const midX = mid.x;
        const midY = mid.y;
        return (
          <path
            key={`${startId}-${midId}-${endId}`}
            d={`M ${startX},${startY} L ${midX},${midY} L ${endX},${endY}`}
            stroke={strokeColor}
            strokeWidth="2"
            fill="transparent"
            markerEnd="url(#arrowhead)"
          />
        );
      } else {
        return (
          <line
            key={`${startId}-${endId}`}
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke={strokeColor}
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        );
      }
    }

    return null;
  };

  const handleBoxClick = (id: number) => {
    if (remainingPoints > 0 || selectedBoxes.includes(id)) {
      if (unlockedBoxes.includes(id)) {
        if (selectedBox === id) {
          const dependentBoxes = FighterConnections
            .filter((conn) => conn.startId === id)
            .map((conn) => conn.endId)
            .filter((endId) => selectedBoxes.includes(endId));
          if (dependentBoxes.length > 0) {
            return;
          }
          setSelectedBox(null);
          setSelectedBoxes(selectedBoxes.filter((boxId) => boxId !== id));
          const newUnlockedBoxes = unlockedBoxes.filter((boxId) => {
            return !FighterConnections.some((conn) => conn.startId === id && conn.endId === boxId);
          });
          setUnlockedBoxes(newUnlockedBoxes);
        } else {
          setSelectedBox(id);
          setSelectedBoxes([...selectedBoxes, id]);
          const newUnlockedBoxes = [...unlockedBoxes];
          FighterConnections
            .filter((conn) => conn.startId === id)
            .forEach((conn) => {
              if (!newUnlockedBoxes.includes(conn.endId)) {
                newUnlockedBoxes.push(conn.endId);
              }
            });
          setUnlockedBoxes(newUnlockedBoxes);
        }
      }
    }
  };

  const resetTree = () => {
    setSelectedBoxes([]);
    setUnlockedBoxes(boxes.filter(box => !FighterConnections.some(conn => conn.endId === box.id)).map(box => box.id));
    setSelectedBox(null);
  };

  const shareTree = () => {
    // Implementar funcionalidade para compartilhar a configuração
    alert('Funcionalidade de compartilhar ainda não implementada');
  };

  return (
    <div className="flex justify-center items-center">
      <div id="skill-tree-container" className="flex flex-col items-center px-10 relative w-[1300px] bg-gray-900 rounded-lg py-4">
        <div className="flex justify-between items-center w-full mb-4">
          <div className="text-lg text-white">
            {`Classe Selecionada: ${selectedClass}`}<br />
            {`Selecionados: ${selectedBoxes.length} / ${maxPoints} (Pontos restantes: ${remainingPoints})`}
            <input 
              type="number" 
              value={maxPoints} 
              onChange={(e) => setMaxPoints(parseInt(e.target.value) || 0)}
              className="ml-4 p-1 w-20 text-black"
            />
          </div>
          <div className="flex">
            <button onClick={resetTree} className="px-4 py-2 bg-gray-700 text-white mr-2">Resetar</button>
            <button onClick={shareTree} className="px-4 py-2 bg-yellow-500 text-white">Compartilhar</button>
          </div>
        </div>
        <div className="w-full inset-0 bg-cover bg-center px-10" style={{ backgroundImage: "url('/background.jpg')" }}>
          <div className="grid grid-cols-11 grid-rows-9 gap-10 relative w-full h-full z-10">
            {boxes.map((box) => (
              <div
                key={box.id}
                id={`box-${box.id}`}
                className={`relative w-14 h-14 ${box.hidden && 'opacity-0'} ${
                  unlockedBoxes.includes(box.id)
                    ? 'cursor-pointer'
                    : 'cursor-not-allowed opacity-50'
                } ${selectedBox === box.id ? 'bg-blue-500' : ''}`}
                onClick={() => unlockedBoxes.includes(box.id) && handleBoxClick(box.id)}
              >
                <img src={box.imageUrl} alt={`Box ${box.id}`} className="w-full h-full object-cover" />
                {selectedBoxes.includes(box.id) && (
                  <div className="absolute top-0 right-0 bg-white text-black text-xs p-1 rounded-full">1</div>
                )}
              </div>
            ))}
          </div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            {FighterConnections.map((conn) => getLine(conn.startId, conn.midId, conn.endId, conn.startAnchor, conn.endAnchor))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SkillTreeCalculator;
