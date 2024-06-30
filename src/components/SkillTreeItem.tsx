import { Skill } from '@/types';
import React, { useState } from 'react';

interface SkillTreeItemProps {
  skill: Skill;
  isItemSelected: boolean;
  isUnSelectedItem: boolean;
}

const SkillTreeItem = ({ skill, isItemSelected, isUnSelectedItem } : SkillTreeItemProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  return (
    <div className={`relative group`}>
      <img
        src={skill.image}
        alt={`Item${skill.id}`}
        className={`w-full h-full object-cover ${!skill.isActive && "rounded-full"}
          ${isItemSelected && `border-4 border-yellow-400`}
          ${skill && (isUnSelectedItem ? 'cursor-pointer' : 'cursor-not-allowed opacity-50')}
        `}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      />
      {isTooltipVisible && (
        <div className="absolute left-full -translate-y-1/2 top-1/2 ml-2 bg-black text-white p-2 rounded z-50 w-96">
          <div>
            <div>
              <strong>{skill.name}</strong>
            </div>
            <div><strong>Level:</strong> {skill.level}</div>
            <div><strong>Range:</strong> {skill.range}</div>
            <div><strong>Cooldown:</strong> {skill.cooldown}</div>
            <div><strong>Description:</strong> {skill.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillTreeItem;
