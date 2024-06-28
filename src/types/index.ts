export interface SkillBoxData {
  id: number;
  imageUrl: string;
  name: string;
  level: number;
  mana: number;
  range: string;
  effect: string;
  description: string;
  combo: string;
  cooldown: number;
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
  boxes: SkillBoxData[];
  connections: SkillConnection[];
}

export interface Coord {
  id: number;
  x: number;
  y: number;
}