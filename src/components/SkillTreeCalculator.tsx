"use client";
import { useEffect, useState } from 'react';
import { SkillTreeData, Coord, SkillConnection } from '@/types';
import SkillTreeItem from './SkillTreeItem';

interface SkillTreeCalculatorProps {
  skillTree: SkillTreeData;
  selectedClass: string;
  maxPoints: number,
}

const SkillTreeCalculator: React.FC<SkillTreeCalculatorProps> = ({ skillTree, selectedClass, maxPoints}) => {
  const [lineCoords, setLineCoords] = useState<Coord[]>([]);
  const [unlockedSkills, setUnlockedSkills] = useState<number[]>(skillTree.skills.filter(skill => !skillTree.connections.some(conn => conn.endId === skill.id)).map(skill => skill.id));
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [remainingPoints, setRemainingPoints] = useState(maxPoints);

  const calculateCoords = () => {
    const container = document.getElementById('skill-tree-container');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const newCoords: Coord[] = [];
    Array.from({ length: 110 }, (_, i) => i + 1).forEach((id: number) => {
      const element = document.getElementById(`skill-${id}`);
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
    setRemainingPoints(maxPoints - selectedSkills.length);
  }, [selectedSkills, maxPoints]);

  useEffect(() => {
    resetTree();
  }, [selectedClass]);

  const getLine = (startId: number, midId: number | undefined, endId: number, startAnchor: string = 'bottom', endAnchor: string = 'top') => {
    const start = lineCoords.find((coord) => coord.id === startId);
    const mid = midId !== undefined ? lineCoords.find((coord) => coord.id === midId) : undefined;
    const end = lineCoords.find((coord) => coord.id === endId);
    const skillSize = 28;
    const offset = 10;

    if (start && end) {
      const isSelected = selectedSkills.includes(startId);
      const strokeColor = isSelected ? (selectedSkills.includes(endId) ? "yellow" : "white") : "gray";

      let startX = start.x;
      let startY = start.y;

      switch (startAnchor) {
        case 'top':
          startX = start.x;
          startY = start.y - skillSize / 2 - offset;
          break;
        case 'bottom':
          startX = start.x;
          startY = start.y + skillSize / 2 + offset;
          break;
        case 'left':
          startX = start.x - skillSize / 2 - offset;
          startY = start.y;
          break;
        case 'right':
          startX = start.x + skillSize / 2 + offset;
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
          endY = end.y - skillSize / 2 - offset;
          break;
        case 'bottom':
          endX = end.x;
          endY = end.y + skillSize / 2 + offset;
          break;
        case 'left':
          endX = end.x - skillSize / 2 - offset;
          endY = end.y;
          break;
        case 'right':
          endX = end.x + skillSize / 2 + offset;
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

  const handleSkillClick = (id: number) => {
    if (remainingPoints > 0 || selectedSkills.includes(id)) {
      if (unlockedSkills.includes(id)) {
        if (selectedSkills.includes(id)) {
          const dependentSkills = skillTree.connections
            .filter((conn) => conn.startId === id)
            .map((conn) => conn.endId)
            .filter((endId) => selectedSkills.includes(endId));
          if (dependentSkills.length > 0) {
            return;
          }
          setSelectedSkills(selectedSkills.filter((skillId) => skillId !== id));
          const newUnlockedSkills = unlockedSkills.filter((skillId) => {
            return !skillTree.connections.some((conn) => conn.startId === id && conn.endId === skillId);
          });
          setUnlockedSkills(newUnlockedSkills);
        } else {
          setSelectedSkills([...selectedSkills, id]);
          const newUnlockedSkills = [...unlockedSkills];
          skillTree.connections
            .filter((conn) => conn.startId === id)
            .forEach((conn) => {
              if (!newUnlockedSkills.includes(conn.endId)) {
                newUnlockedSkills.push(conn.endId);
              }
            });
          setUnlockedSkills(newUnlockedSkills);
        }
      }
    }
  };

  const resetTree = () => {
    setSelectedSkills([]);
    setUnlockedSkills(skillTree.skills.filter(skill => !skillTree.connections.some(conn => conn.endId === skill.id)).map(skill => skill.id));
  };

  return (
    <div id="skill-tree-container" className="min-w-[1000px] bg-cover bg-center relative overflow-x-auto lg:overflow-visible" style={{ backgroundImage: `url('${skillTree.backgroundImage}')` }}>
      <div className="grid grid-cols-11 grid-rows-9 gap-10 relative z-10 p-10">
        {Array.from({ length: 110 }, (_, i) => i + 1).map((id: number) => {
          const skill = skillTree.skills.find(skill => skill.id === id);
          return (
            <div key={id} id={`skill-${id}`} className="relative w-14 h-14 group" onClick={() => {}}>
              {skill && <SkillTreeItem handleSkillClick={() => skill && handleSkillClick(skill.id)} skill={skill.skill} isItemSelected={selectedSkills.includes(skill.id)} isUnSelectedItem={unlockedSkills.includes(skill.id)}/>}
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
  );
};

export default SkillTreeCalculator;
