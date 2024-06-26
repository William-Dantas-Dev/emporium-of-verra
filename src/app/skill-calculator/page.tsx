"use client"
import { Footer, Navbar } from '@/components';
import SkillTreeCalculator from '@/components/SkillTreeCalculator';
import { useState } from 'react';

export default function Page() {
  const [selectedClass, setSelectedClass] = useState('Fighter'); // Classe padrão selecionada

  const classes = [
    'Bard', 'Cleric', 'Fighter', 'Mage', 'Ranger', 'Rogue', 'Summoner', 'Tank'
  ];

  return (
    <div className="min-h-screen min-w-full flex flex-col bg-gray-900">
      <Navbar />
      <div className="flex justify-center mt-4">
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`px-4 py-2 mx-1 ${
              selectedClass === cls ? 'bg-blue-500' : 'bg-gray-700'
            } text-white`}
          >
            {cls}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center flex-grow pt-4">
        <SkillTreeCalculator selectedClass={selectedClass} />
      </div>
      <Footer />
    </div>
  );
}
