// constants/skillTreeData.ts
import { SkillTreeData } from '@/types';
import { fighterSkills } from '@/constants/SkillsFighter';

export const skillTrees: { [key: string]: SkillTreeData } = {
  Bard: {
    enabled: false,
    skills: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
  Cleric: {
    enabled: false,
    skills: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
  Fighter: {
    enabled: true,
    skills: [
      { id: 5, position: 5, skill: fighterSkills[0]},
      { id: 12, position: 12, skill: fighterSkills[1]},
      { id: 13, position: 13, skill: fighterSkills[2]},
      { id: 16, position: 16, skill: fighterSkills[3]},
      { id: 19, position: 19, skill: fighterSkills[4]},
      { id: 20, position: 20, skill: fighterSkills[5]},
      { id: 23, position: 23, skill: fighterSkills[6]},
      { id: 24, position: 24, skill: fighterSkills[7]},
      { id: 25, position: 25, skill: fighterSkills[8]},
      { id: 26, position: 26, skill: fighterSkills[9]},
      { id: 29, position: 29, skill: fighterSkills[10]},
      { id: 30, position: 30, skill: fighterSkills[11]},
      { id: 35, position: 35, skill: fighterSkills[12]},
      { id: 36, position: 36, skill: fighterSkills[13]},
      { id: 37, position: 37, skill: fighterSkills[14]},
      { id: 39, position: 39, skill: fighterSkills[15]},
      { id: 40, position: 40, skill: fighterSkills[16]},
      { id: 41, position: 41, skill: fighterSkills[17]},
      { id: 42, position: 42, skill: fighterSkills[18]},
      { id: 46, position: 46, skill: fighterSkills[19]},
      { id: 49, position: 49, skill: fighterSkills[20]},
      { id: 52, position: 52, skill: fighterSkills[21]},
      { id: 56, position: 56, skill: fighterSkills[22]},
      { id: 59, position: 59, skill: fighterSkills[23]},
      { id: 61, position: 61, skill: fighterSkills[24]},
      { id: 64, position: 64, skill: fighterSkills[25]},
      { id: 67, position: 67, skill: fighterSkills[26]},
      { id: 69, position: 69, skill: fighterSkills[27]},
      { id: 71, position: 71, skill: fighterSkills[28]},
      { id: 77, position: 77, skill: fighterSkills[29]},
      { id: 81, position: 81, skill: fighterSkills[30]},
      { id: 83, position: 83, skill: fighterSkills[31]},
      { id: 88, position: 88, skill: fighterSkills[32]},
      { id: 99, position: 99, skill: fighterSkills[33]}
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
    skills: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
  Ranger: {
    enabled: true,
    skills: [
      { id: 5, position: 5, skill: fighterSkills[0]},
      { id: 12, position: 5, skill: fighterSkills[0]},
      { id: 13, position: 5, skill: fighterSkills[0]},
      { id: 16, position: 5, skill: fighterSkills[0]},
      { id: 19, position: 5, skill: fighterSkills[0]},
      { id: 20, position: 5, skill: fighterSkills[0]},
      { id: 23, position: 5, skill: fighterSkills[0]},
      { id: 24, position: 5, skill: fighterSkills[0]},
      { id: 25, position: 5, skill: fighterSkills[0]},
      { id: 26, position: 5, skill: fighterSkills[0]},
      { id: 29, position: 5, skill: fighterSkills[0]},
      { id: 30, position: 5, skill: fighterSkills[0]},
      { id: 35, position: 5, skill: fighterSkills[0]},
      { id: 36, position: 5, skill: fighterSkills[0]},
      { id: 37, position: 5, skill: fighterSkills[0]},
      { id: 39, position: 5, skill: fighterSkills[0]},
      { id: 40, position: 5, skill: fighterSkills[0]},
      { id: 41, position: 5, skill: fighterSkills[0]},
      { id: 42, position: 5, skill: fighterSkills[0]},
      { id: 46, position: 5, skill: fighterSkills[0]},
      { id: 49, position: 5, skill: fighterSkills[0]},
      { id: 52, position: 5, skill: fighterSkills[0]},
      { id: 56, position: 5, skill: fighterSkills[0]},
      { id: 59, position: 5, skill: fighterSkills[0]},
      { id: 61, position: 5, skill: fighterSkills[0]},
      { id: 64, position: 5, skill: fighterSkills[0]},
      { id: 67, position: 5, skill: fighterSkills[0]},
      { id: 69, position: 5, skill: fighterSkills[0]},
      { id: 71, position: 5, skill: fighterSkills[0]},
      { id: 77, position: 5, skill: fighterSkills[0]},
      { id: 81, position: 5, skill: fighterSkills[0]},
      { id: 83, position: 5, skill: fighterSkills[0]},
      { id: 88, position: 5, skill: fighterSkills[0]},
      { id: 99, position: 5, skill: fighterSkills[0]}
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
    skills: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
  Summoner: {
    enabled: false,
    skills: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
  Tank: {
    enabled: false,
    skills: [
      // Dados da árvore de habilidades do Cleric
    ],
    connections: [
      // Conexões da árvore de habilidades do Cleric
    ],
  },
};
