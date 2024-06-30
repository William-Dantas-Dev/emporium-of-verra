"use client";
import { useState } from 'react';
import { Footer, Navbar } from '@/components';
import SkillTreeCalculator from '@/components/SkillTreeCalculator';
import { SkillTreeData } from '@/types';
import { skillTrees } from '@/constants/skillTreeData';

const classes = Object.keys(skillTrees);

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<string>(classes[2]);

  const handleClassChange = (newClass: string) => {
    if (skillTrees[newClass].enabled) {
      setSelectedClass(newClass);
    }
  };

  const currentSkillTree: SkillTreeData = skillTrees[selectedClass];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-8 items-center my-4">
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => handleClassChange(cls)}
            className={`px-4 py-2 mx-2 ${selectedClass === cls ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'} ${!skillTrees[cls].enabled && 'opacity-50 cursor-not-allowed'}`}
            disabled={!skillTrees[cls].enabled}
          >
            {cls}
          </button>
        ))}
      </div>
      <SkillTreeCalculator skillTree={currentSkillTree} selectedClass={selectedClass} />
      <Footer />
    </div>
  );
}
