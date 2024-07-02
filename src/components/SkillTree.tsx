import React, { useState } from 'react'
import TreeOptions from './TreeOptions';
import SkillTreeCalculator from './SkillTreeCalculator';

import { skillTreeClass } from '@/constants/ClassData/skillTreeClassData';
import { skillTreeWeapon } from '@/constants/WeaponData/skillTreeWeaponData';
import { SkillTreeData } from '@/types';

const classes = Object.keys(skillTreeClass);
const weapons = Object.keys(skillTreeWeapon);

const SkillTree = () => {
  const [stateSelect, setStateSelect] = useState("Class");

  const [classMaxPoints, setClassMaxPoints] = useState(50);
  const [classPointsRemaining, setClassPointsRemaining] = useState(50);
  const [selectedClass, setSelectedClass] = useState('Fighter');

  const [weaponMaxPoints, setWeaponMaxPoints] = useState(20);
  const [weaponPointsRemaining, setWeaponPointsRemaining] = useState(20);
  const [selectedWeapon, setSelectedWeapon] = useState('ShortBow');

  const handleClassChange = (newClass: string) => {
    if (skillTreeClass[newClass].enabled) {
      setSelectedClass(newClass);
    }
  };

  const handleWeaponChange = (newWeapon: string) => {
    if (skillTreeWeapon[newWeapon].enabled) {
      setSelectedWeapon(newWeapon);
    }
  };

  const currentClassSkillTree: SkillTreeData = skillTreeClass[selectedClass];
  const currentWeaponSkillTree: SkillTreeData = skillTreeWeapon[selectedWeapon];

  return (
    <div className='min-w-full grid overflow-x-auto lg:overflow-visible'>
      <div className='justify-self-center border border-gray-600 rounded'>
        <div className='pt-2 bg-gray-800'>
          <button
              onClick={() => setStateSelect("Class")}
              className={`px-4 py-2 ${stateSelect == "Class" && "border-b-4 border-indigo-500"} text-white rounded`}
            >
              Classes
          </button>
          <button
              onClick={() => setStateSelect("Weapon")}
              className={`px-4 py-2 ${stateSelect == "Weapon" && "border-b-4 border-indigo-500"} text-white rounded`}
            >
              Weapons
          </button>
        </div>
        {
          stateSelect == "Class" ?
          <>
            <TreeOptions
              maxPoints={classMaxPoints}
              setMaxPoints={setClassMaxPoints}
              pointsRemaining={classPointsRemaining}
              label={"Class"}
              selectedValue={selectedClass}
              onChangeSelect={handleClassChange}
              optionValues={classes}
            />
            <SkillTreeCalculator skillTree={currentClassSkillTree} selectedClass={selectedClass} maxPoints={classMaxPoints}/>
          </> 
          : 
          <>
            <TreeOptions
              maxPoints={weaponMaxPoints}
              setMaxPoints={setWeaponMaxPoints}
              pointsRemaining={weaponPointsRemaining}
              label={"Weapon"}
              selectedValue={selectedWeapon}
              onChangeSelect={handleWeaponChange}
              optionValues={weapons}
            />
            <SkillTreeCalculator skillTree={currentWeaponSkillTree} selectedClass={selectedWeapon} maxPoints={weaponMaxPoints}/>
          </>
        }
        
      </div>
    </div>
  )
}

export default SkillTree
