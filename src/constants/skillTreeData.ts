// constants/skillTreeData.ts
import { SkillTreeData } from '@/types';

export const skillTrees: { [key: string]: SkillTreeData } = {
  Bard: {
    enabled: false,
    boxes: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
  Cleric: {
    enabled: false,
    boxes: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
  Fighter: {
    enabled: true,
    boxes: [
      { id: 5, imageUrl: '/fighterSkills/Art_of_War_Skill.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'Switching forms no longer triggers cooldowns or costs Combat Momentum.', combo: 'None', cooldown: 10 },
      { id: 12, imageUrl: '/fighterSkills/Form_of_Celerity_Skill.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 13, imageUrl: '/fighterSkills/Relentless_Form_of_the_Avalanche_Skill.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 16, imageUrl: '/fighterSkills/Cataclysm.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 19, imageUrl: '/fighterSkills/Meditative_Form_of_the_River_Skill.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 20, imageUrl: '/fighterSkills/Form_of_Fluidity.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 23, imageUrl: '/fighterSkills/Leap_Strike.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 24, imageUrl: '/fighterSkills/Reinvigorating_Exert_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 25, imageUrl: '/fighterSkills/Exert.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 26, imageUrl: '/fighterSkills/Reinvigorating_Exert_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 29, imageUrl: '/fighterSkills/Rupture.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 30, imageUrl: '/fighterSkills/Blood_Fusion.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 35, imageUrl: '/fighterSkills/Climactic_Whirlwind_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 36, imageUrl: '/fighterSkills/Whirlwind.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 37, imageUrl: '/fighterSkills/Climactic_Whirlwind_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 39, imageUrl: '/fighterSkills/Slicing_Maim_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 40, imageUrl: '/fighterSkills/Maim.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 41, imageUrl: '/fighterSkills/Greater_Brutality_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 42, imageUrl: '/fighterSkills/Battle_Cry.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 46, imageUrl: '/fighterSkills/Fighter_Momentum_Buff.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 49, imageUrl: '/fighterSkills/Brutal_Cleave.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 52, imageUrl: '/fighterSkills/Greater_Brutality_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 56, imageUrl: '/fighterSkills/Lunging_Assault.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 59, imageUrl: '/fighterSkills/Blitz.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 61, imageUrl: '/fighterSkills/Crippling_Blow.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 64, imageUrl: '/fighterSkills/Knock_Out.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 67, imageUrl: '/fighterSkills/Recharging_Lunging_Assault_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 69, imageUrl: '/fighterSkills/Raging_Blitz_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 71, imageUrl: '/fighterSkills/Lethal_Blow.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 77, imageUrl: '/fighterSkills/Overpower.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 81, imageUrl: '/fighterSkills/Raging_Blitz_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 83, imageUrl: '/fighterSkills/Consuming_Lethal_Blow_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 88, imageUrl: '/fighterSkills/Form_Of_Ferocity.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 99, imageUrl: '/fighterSkills/Combat_Momentum_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  }
    ],
    connections: [
      { startId: 71, midId: 70, endId: 81, startAnchor: 'left', endAnchor: 'top'},
      { startId: 71, midId: 72, endId: 83, startAnchor: 'left', endAnchor: 'top'},
      { startId: 59, midId: 70, endId: 81, startAnchor: 'bottom', endAnchor: 'top'},
      { startId: 59, midId: 58, endId: 69, startAnchor: 'left', endAnchor: 'top'},
      { startId: 59, endId: 56, startAnchor: 'left', endAnchor: 'right'},
      { startId: 56, endId: 23, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 23, endId: 12, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 12, endId: 13, startAnchor: 'right', endAnchor: 'left'},
      { startId: 71, endId: 49, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 61, endId: 64, startAnchor: 'right', endAnchor: 'left'},
      { startId: 64, endId: 42, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 42, endId: 20, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 12, midId: 1, endId: 5, startAnchor: 'top', endAnchor: 'left' },
      { startId: 20, midId: 9, endId: 5, startAnchor: 'top', endAnchor: 'right' },
      { startId: 56, endId: 67, startAnchor: 'bottom', endAnchor: 'top'},
      { startId: 49, endId: 46, startAnchor: 'left', endAnchor: 'right'},
      { startId: 49, midId: 47, endId: 36, startAnchor: 'left', endAnchor: 'bottom'},
      { startId: 36, endId: 35, startAnchor: 'left', endAnchor: 'right'},
      { startId: 36, endId: 37, startAnchor: 'right', endAnchor: 'left'},
      { startId: 36, endId: 25, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 25, endId: 24, startAnchor: 'left', endAnchor: 'right'},
      { startId: 25, endId: 26, startAnchor: 'right', endAnchor: 'left'},
      { startId: 25, midId: 14, endId: 16, startAnchor: 'top', endAnchor: 'left'},
      { startId: 49, midId: 51, endId: 40, startAnchor: 'right', endAnchor: 'bottom'},
      { startId: 40, endId: 39, startAnchor: 'left', endAnchor: 'right'},
      { startId: 40, endId: 41, startAnchor: 'right', endAnchor: 'left'},
      { startId: 40, endId: 29, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 41, endId: 30, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 41, endId: 52, startAnchor: 'bottom', endAnchor: 'top'},
      { startId: 20, endId: 19, startAnchor: 'left', endAnchor: 'right'},
      { startId: 29, midId: 18, endId: 16, startAnchor: 'top', endAnchor: 'right'},
    ],
  },
  Mage: {
    enabled: false,
    boxes: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
  Ranger: {
    enabled: true,
    boxes: [
      { id: 5, imageUrl: '/fighterSkills/Art_of_War_Skill.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10 },
      { id: 12, imageUrl: '/fighterSkills/Form_of_Celerity_Skill.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 13, imageUrl: '/fighterSkills/Relentless_Form_of_the_Avalanche_Skill.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 16, imageUrl: '/fighterSkills/Cataclysm.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 19, imageUrl: '/fighterSkills/Meditative_Form_of_the_River_Skill.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 20, imageUrl: '/fighterSkills/Form_of_Fluidity.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 23, imageUrl: '/fighterSkills/Leap_Strike.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 24, imageUrl: '/fighterSkills/Reinvigorating_Exert_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 25, imageUrl: '/fighterSkills/Exert.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 26, imageUrl: '/fighterSkills/Reinvigorating_Exert_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 29, imageUrl: '/fighterSkills/Rupture.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 30, imageUrl: '/fighterSkills/Blood_Fusion.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 35, imageUrl: '/fighterSkills/Climactic_Whirlwind_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 36, imageUrl: '/fighterSkills/Whirlwind.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 37, imageUrl: '/fighterSkills/Climactic_Whirlwind_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 39, imageUrl: '/fighterSkills/Slicing_Maim_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 40, imageUrl: '/fighterSkills/Maim.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 41, imageUrl: '/fighterSkills/Greater_Brutality_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 42, imageUrl: '/fighterSkills/Battle_Cry.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 46, imageUrl: '/fighterSkills/Fighter_Momentum_Buff.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 49, imageUrl: '/fighterSkills/Brutal_Cleave.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 52, imageUrl: '/fighterSkills/Greater_Brutality_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 56, imageUrl: '/fighterSkills/Lunging_Assault.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 59, imageUrl: '/fighterSkills/Blitz.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 61, imageUrl: '/fighterSkills/Crippling_Blow.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 64, imageUrl: '/fighterSkills/Knock_Out.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 67, imageUrl: '/fighterSkills/Recharging_Lunging_Assault_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 69, imageUrl: '/fighterSkills/Raging_Blitz_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 71, imageUrl: '/fighterSkills/Lethal_Blow.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 77, imageUrl: '/fighterSkills/Overpower.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 81, imageUrl: '/fighterSkills/Raging_Blitz_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 83, imageUrl: '/fighterSkills/Consuming_Lethal_Blow_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 88, imageUrl: '/fighterSkills/Form_Of_Ferocity.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  },
      { id: 99, imageUrl: '/fighterSkills/Combat_Momentum_Skill_Tree_IconAlpha.png', name: 'Art of War', level: 1, mana: 50, range: '0-10 m', effect: 'Deals 100 damage', description: 'A powerful attack', combo: 'None', cooldown: 10  }
    ],
    connections: [
      { startId: 71, midId: 70, endId: 81, startAnchor: 'left', endAnchor: 'top'},
      { startId: 71, midId: 72, endId: 83, startAnchor: 'left', endAnchor: 'top'},
      { startId: 59, midId: 70, endId: 81, startAnchor: 'bottom', endAnchor: 'top'},
      { startId: 59, midId: 58, endId: 69, startAnchor: 'left', endAnchor: 'top'},
      { startId: 59, endId: 56, startAnchor: 'left', endAnchor: 'right'},
      { startId: 56, endId: 23, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 23, endId: 12, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 12, endId: 13, startAnchor: 'right', endAnchor: 'left'},
      { startId: 71, endId: 49, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 61, endId: 64, startAnchor: 'right', endAnchor: 'left'},
      { startId: 64, endId: 42, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 42, endId: 20, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 12, midId: 1, endId: 5, startAnchor: 'top', endAnchor: 'left' },
      { startId: 20, midId: 9, endId: 5, startAnchor: 'top', endAnchor: 'right' },
      { startId: 56, endId: 67, startAnchor: 'bottom', endAnchor: 'top'},
      { startId: 49, endId: 46, startAnchor: 'left', endAnchor: 'right'},
      { startId: 49, midId: 47, endId: 36, startAnchor: 'left', endAnchor: 'bottom'},
      { startId: 36, endId: 35, startAnchor: 'left', endAnchor: 'right'},
      { startId: 36, endId: 37, startAnchor: 'right', endAnchor: 'left'},
      { startId: 36, endId: 25, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 25, endId: 24, startAnchor: 'left', endAnchor: 'right'},
      { startId: 25, endId: 26, startAnchor: 'right', endAnchor: 'left'},
      { startId: 25, midId: 14, endId: 16, startAnchor: 'top', endAnchor: 'left'},
      { startId: 49, midId: 51, endId: 40, startAnchor: 'right', endAnchor: 'bottom'},
      { startId: 40, endId: 39, startAnchor: 'left', endAnchor: 'right'},
      { startId: 40, endId: 41, startAnchor: 'right', endAnchor: 'left'},
      { startId: 40, endId: 29, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 41, endId: 30, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 41, endId: 52, startAnchor: 'bottom', endAnchor: 'top'},
      { startId: 20, endId: 19, startAnchor: 'left', endAnchor: 'right'},
      { startId: 29, midId: 18, endId: 16, startAnchor: 'top', endAnchor: 'right'},
    ],
  },  
  Rogue: {
    enabled: false,
    boxes: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
  Summoner: {
    enabled: false,
    boxes: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
  Tank: {
    enabled: false,
    boxes: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
};
