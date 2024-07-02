export interface SkillsData {
  id: number;
  skill: Skill,
}

export interface SkillConnection {
  startId: number;
  midId?: number;
  endId: number;
  startAnchor?: string;
  endAnchor?: string;
}

export interface SkillTreeData {
  enabled: boolean,
  backgroundImage: string,
  skills: SkillsData[];
  connections: SkillConnection[];
}

export interface Coord {
  id: number;
  x: number;
  y: number;
}
export interface Skill {
  id: number,
  image: string,
  name: string,
  description: string,
  isActive: boolean,
  level: string,
  cooldown: string,
  range: string,
  changedSkill?: boolean,
}