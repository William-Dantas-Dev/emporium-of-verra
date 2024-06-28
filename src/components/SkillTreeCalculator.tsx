"use client";
import { useEffect, useState, useRef } from 'react';
import { SkillTreeData, Coord, SkillConnection } from '@/types';
import SkillTreeItem from './SkillTreeItem';

interface SkillTreeCalculatorProps {
  skillTree: SkillTreeData;
  selectedClass: string;
}

const SkillTreeCalculator: React.FC<SkillTreeCalculatorProps> = ({ skillTree, selectedClass }) => {
  const [lineCoords, setLineCoords] = useState<Coord[]>([]);
  const [unlockedBoxes, setUnlockedBoxes] = useState<number[]>(skillTree.boxes.filter(box => !skillTree.connections.some(conn => conn.endId === box.id)).map(box => box.id));
  const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [maxPoints, setMaxPoints] = useState(50);
  const [remainingPoints, setRemainingPoints] = useState(maxPoints);

  const calculateCoords = () => {
    const container = document.getElementById('skill-tree-container');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const newCoords: Coord[] = [];
    Array.from({ length: 99 }, (_, i) => i + 1).forEach((id: number) => {
      const element = document.getElementById(`box-${id}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        newCoords.push({
          id,
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        });
      }
    });
    setLineCoords(newCoords);
  };

  useEffect(() => {
    calculateCoords();
  },[]);

  useEffect(() => {
    setRemainingPoints(maxPoints - selectedBoxes.length);
  }, [selectedBoxes, maxPoints]);

  useEffect(() => {
    resetTree();
  }, [selectedClass]);

  const getLine = (startId: number, midId: number | undefined, endId: number, startAnchor: string = 'bottom', endAnchor: string = 'top') => {
    console.log(startId);
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
        if (selectedBoxes.includes(id)) {
          const dependentBoxes = skillTree.connections
            .filter((conn) => conn.startId === id)
            .map((conn) => conn.endId)
            .filter((endId) => selectedBoxes.includes(endId));
          if (dependentBoxes.length > 0) {
            return;
          }
          setSelectedBox(null);
          setSelectedBoxes(selectedBoxes.filter((boxId) => boxId !== id));
          const newUnlockedBoxes = unlockedBoxes.filter((boxId) => {
            return !skillTree.connections.some((conn) => conn.startId === id && conn.endId === boxId);
          });
          setUnlockedBoxes(newUnlockedBoxes);
        } else {
          setSelectedBox(id);
          setSelectedBoxes([...selectedBoxes, id]);
          const newUnlockedBoxes = [...unlockedBoxes];
          skillTree.connections
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
    setUnlockedBoxes(skillTree.boxes.filter(box => !skillTree.connections.some(conn => conn.endId === box.id)).map(box => box.id));
    setSelectedBox(null);
  };
  return (
    <div id="skill-tree-container" className="max-w-[1000px] inset-0 bg-cover relative overflow-x-auto overflow-y-hidden" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="inset-0 bg-cover bg-center w-[1000px] p-10">
        <div className="grid grid-cols-11 grid-rows-9 gap-10 relative z-10">
          {Array.from({ length: 99 }, (_, i) => i + 1).map((id: number) => {
            const box = skillTree.boxes.find(box => box.id === id);
            return (
              <div
                key={id}
                id={`box-${id}`}
                className="relative w-14 h-14 group"
                onClick={() => box && handleBoxClick(box.id)}
              >
                {box && <SkillTreeItem item={box} isItemSelected={selectedBoxes.includes(box.id)} isUnSelectedItem={unlockedBoxes.includes(box.id)}/>}
                {box && (
                  <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-black opacity-50 text-white text-xs p-1 w-6 h-6">
                    {selectedBoxes.includes(box.id) ? "1" : "0"}/1
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <svg className="absolute inset-0 z-0 w-[1000px] h-full">
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
          {skillTree.connections.map((conn: SkillConnection) => getLine(conn.startId, conn.midId, conn.endId, conn.startAnchor, conn.endAnchor))}
        </svg>
      </div>
    </div>
  );
};

export default SkillTreeCalculator;
