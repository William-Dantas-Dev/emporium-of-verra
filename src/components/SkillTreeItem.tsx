import { Skill } from '@/types';
import React, { useState } from 'react';

interface SkillTreeItemProps {
  skill: Skill;
  isItemSelected: boolean;
  isUnSelectedItem: boolean;
  handleSkillClick: (id: number) => void
}

const SkillTreeItem = ({ skill, isItemSelected, isUnSelectedItem, handleSkillClick} : SkillTreeItemProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleButtonClick = (value: string) => {
    console.log(value);
  }

  return (
    <div className="relative group" onMouseLeave={handleMouseLeave}>
      <img
        src={skill.image}
        alt={`Item${skill.id}`}
        className={`w-14 h-14 object-cover ${!skill.isActive && "rounded-full"}
          ${isItemSelected && `border-4 border-yellow-400`}
          ${skill && (isUnSelectedItem ? 'cursor-pointer' : 'cursor-not-allowed opacity-50')}
        `}
        onClick={() => handleSkillClick(skill.id)}
        onMouseEnter={handleMouseEnter}
      />
      {isTooltipVisible && (
        <div
          className="absolute left-full -translate-y-1/2 top-1/2 ml-[-2] bg-black text-white p-2 rounded z-50 w-96"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {skill.changedSkill ? (
            <div>
              <div><strong>{skill.name}</strong></div>
              <div className="mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick("Button 1")}>
                  Option 1
                </button>
              </div>
              <div className="mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick("Button 2")}>
                  Option 2
                </button>
              </div>
              <div className="mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick("Button 3")}>
                  Option 3
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div><strong>{skill.name}</strong></div>
              <div><strong>Level:</strong> {skill.level}</div>
              <div><strong>Range:</strong> {skill.range}</div>
              <div><strong>Cooldown:</strong> {skill.cooldown}</div>
              <div><strong>Description:</strong> {skill.description}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SkillTreeItem;
