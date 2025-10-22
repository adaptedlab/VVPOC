export type RegionId = 'variableValley' | 'equationEngine' | 'functionFields' | 'graphingGrounds' | 'start';

export interface RegionTheme {
  name: string;
  primary: string;
  gradient: string;
  description: string;
}

export const regionThemes: Record<RegionId, RegionTheme> = {
  start: {
    name: "Mathematics Island",
    primary: "from-purple-600 to-blue-600",
    gradient: "bg-gradient-to-br from-purple-600 to-blue-600",
    description: "The central hub"
  },
  variableValley: {
    name: "Variable Valley",
    primary: "from-emerald-600 to-teal-600",
    gradient: "bg-gradient-to-br from-emerald-600 to-teal-600",
    description: "Rolling hills with algebraic expressions"
  },
  equationEngine: {
    name: "Equation Engine",
    primary: "from-orange-600 to-red-600",
    gradient: "bg-gradient-to-br from-orange-600 to-red-600",
    description: "Mechanical logic systems"
  },
  functionFields: {
    name: "Function Fields",
    primary: "from-amber-600 to-yellow-600",
    gradient: "bg-gradient-to-br from-amber-600 to-yellow-600",
    description: "Mathematical relationships"
  },
  graphingGrounds: {
    name: "Graphing Grounds",
    primary: "from-cyan-600 to-blue-600",
    gradient: "bg-gradient-to-br from-cyan-600 to-blue-600",
    description: "Coordinate planes and slopes"
  }
};

export function getRegionTheme(nodeId: string): RegionTheme {
  if (nodeId.startsWith('variableValley')) return regionThemes.variableValley;
  if (nodeId.startsWith('equationEngine')) return regionThemes.equationEngine;
  if (nodeId.startsWith('functionFields')) return regionThemes.functionFields;
  if (nodeId.startsWith('graphingGrounds')) return regionThemes.graphingGrounds;
  return regionThemes.start;
}
