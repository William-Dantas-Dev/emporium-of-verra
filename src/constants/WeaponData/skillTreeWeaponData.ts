// constants/skillTreeData.ts
import { SkillTreeData } from '@/types';
import { ShortBowSkills } from '@/constants/WeaponData/ShortBowSkills';
import { WandSkills } from './WandSkills';

export const skillTreeWeapon: { [key: string]: SkillTreeData } = {
  ShortBow: {
    enabled: true,
    backgroundImage: '/background.jpg',
    skills: [
      { id: 4, skill: ShortBowSkills[9]},
      { id: 5, skill: ShortBowSkills[19]},

      { id: 7, skill: ShortBowSkills[23]},

      { id: 15, skill: ShortBowSkills[8]},
      { id: 16, skill: ShortBowSkills[18]},

      { id: 26, skill: ShortBowSkills[7]},
      { id: 27, skill: ShortBowSkills[17]},

      { id: 37, skill: ShortBowSkills[6]},
      { id: 38, skill: ShortBowSkills[16]},

      { id: 40, skill: ShortBowSkills[22]},

      { id: 48, skill: ShortBowSkills[5]},
      { id: 49, skill: ShortBowSkills[15]},

      { id: 59, skill: ShortBowSkills[4]},
      { id: 60, skill: ShortBowSkills[14]},

      { id: 70, skill: ShortBowSkills[3]},
      { id: 71, skill: ShortBowSkills[13]},

      { id: 73, skill: ShortBowSkills[21]},

      { id: 81, skill: ShortBowSkills[2]},
      { id: 82, skill: ShortBowSkills[12]},

      { id: 92, skill: ShortBowSkills[1]},
      { id: 93, skill: ShortBowSkills[11]},

      { id: 103, skill: ShortBowSkills[0]},
      { id: 104, skill: ShortBowSkills[10]},

      { id: 106, skill: ShortBowSkills[20]},
    ],
    connections: [
      { startId: 40, endId: 7, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 73, endId: 40, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 106, endId: 73, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 103, endId: 92, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 92, endId: 81, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 81, endId: 70, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 70, endId: 59, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 59, endId: 48, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 48, endId: 37, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 37, endId: 26, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 26, endId: 15, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 15, endId: 4, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 104, endId: 93, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 93, endId: 82, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 82, endId: 71, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 71, endId: 60, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 60, endId: 49, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 49, endId: 38, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 38, endId: 27, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 27, endId: 16, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 16, endId: 5, startAnchor: 'top', endAnchor: 'bottom'},
    ],
  },
  Wand: {
    enabled: true,
    backgroundImage: 'https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg',
    skills: [
      { id: 5, skill: WandSkills[0]},
      { id: 7, skill: WandSkills[47]},
      { id: 13, skill: WandSkills[48]},
      { id: 17, skill: WandSkills[13]},
      { id: 21, skill: WandSkills[20]},

      { id: 25, skill: WandSkills[3]},
      { id: 26, skill: WandSkills[6]},
      { id: 27, skill: WandSkills[7]},

      { id: 29, skill: WandSkills[10]},
      { id: 30, skill: WandSkills[14]},
      { id: 31, skill: WandSkills[19]},

      { id: 36, skill: WandSkills[2]},
      { id: 37, skill: WandSkills[5]},
      { id: 38, skill: WandSkills[8]},

      { id: 40, skill: WandSkills[11]},
      { id: 41, skill: WandSkills[15]},
      { id: 42, skill: WandSkills[18]},

      { id: 47, skill: WandSkills[1]},
      { id: 48, skill: WandSkills[4]},
      { id: 49, skill: WandSkills[9]},

      { id: 51, skill: WandSkills[12]},
      { id: 52, skill: WandSkills[16]},
      { id: 53, skill: WandSkills[17]},

      { id: 57, skill: WandSkills[23]},
      { id: 61, skill: WandSkills[22]},
      { id: 65, skill: WandSkills[21]},

      { id: 69, skill: WandSkills[26]},
      { id: 70, skill: WandSkills[29]},
      { id: 71, skill: WandSkills[32]},

      { id: 73, skill: WandSkills[35]},
      { id: 74, skill: WandSkills[38]},
      { id: 75, skill: WandSkills[41]},

      { id: 80, skill: WandSkills[25]},
      { id: 81, skill: WandSkills[28]},
      { id: 82, skill: WandSkills[31]},

      { id: 84, skill: WandSkills[34]},
      { id: 85, skill: WandSkills[37]},
      { id: 86, skill: WandSkills[40]},

      { id: 91, skill: WandSkills[24]},
      { id: 92, skill: WandSkills[27]},
      { id: 93, skill: WandSkills[30]},

      { id: 95, skill: WandSkills[33]},
      { id: 96, skill: WandSkills[36]},
      { id: 97, skill: WandSkills[39]},

      { id: 101, skill: WandSkills[44]},
      { id: 105, skill: WandSkills[43]},
      { id: 109, skill: WandSkills[42]},
    ],
    connections: [
      { startId: 47, endId: 36, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 36, endId: 25, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 57, endId: 13, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 13, midId: 15, endId: 26, startAnchor: 'right', endAnchor: 'top'},
      { startId: 26, endId: 37, startAnchor: 'bottom', endAnchor: 'top'},
      { startId: 37, endId: 48, startAnchor: 'bottom', endAnchor: 'top'},

      { startId: 13, midId: 16, endId: 27, startAnchor: 'right', endAnchor: 'top'},
      { startId: 27, endId: 38, startAnchor: 'bottom', endAnchor: 'top'},
      { startId: 38, endId: 49, startAnchor: 'bottom', endAnchor: 'top'},

      { startId: 17, midId: 18, endId: 29, startAnchor: 'right', endAnchor: 'top'},
      { startId: 29, endId: 40, startAnchor: 'bottom', endAnchor: 'top'},
      { startId: 40, endId: 51, startAnchor: 'bottom', endAnchor: 'top'},

      { startId: 61, endId: 17, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 17, midId: 19, endId: 30, startAnchor: 'right', endAnchor: 'top'},
      { startId: 30, endId: 41, startAnchor: 'bottom', endAnchor: 'top'},
      { startId: 41, endId: 52, startAnchor: 'bottom', endAnchor: 'top'},

      { startId: 53, endId: 42, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 42, endId: 31, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 17, endId: 21, startAnchor: 'right', endAnchor: 'left'},
      { startId: 21, endId: 65, startAnchor: 'bottom', endAnchor: 'top'},

      { startId: 91, endId: 80, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 80, endId: 69, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 92, endId: 81, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 81, endId: 70, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 93, endId: 82, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 82, endId: 71, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 101, midId: 103, endId: 92, startAnchor: 'right', endAnchor: 'bottom'},
      { startId: 101, midId: 104, endId: 93, startAnchor: 'right', endAnchor: 'bottom'},

      { startId: 95, endId: 84, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 84, endId: 73, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 96, endId: 85, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 85, endId: 74, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 97, endId: 86, startAnchor: 'top', endAnchor: 'bottom'},
      { startId: 86, endId: 75, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 105, endId: 109, startAnchor: 'right', endAnchor: 'left'},
      { startId: 109, endId: 65, startAnchor: 'top', endAnchor: 'bottom'},

      { startId: 105, midId: 106, endId: 95, startAnchor: 'right', endAnchor: 'bottom'},
      { startId: 105, midId: 107, endId: 96, startAnchor: 'right', endAnchor: 'bottom'},

      { startId: 101, endId: 57, startAnchor: 'top', endAnchor: 'bottom'},
    ],
  },
};
