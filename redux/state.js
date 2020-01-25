import { professionTypes } from "../enums";

export const defaultTick = {
  tick: new Date()
};

export const defaultResources = [
  {
    name: "wood",
    count: 50
  },
  {
    name: "iron",
    count: 10
  },
  {
    name: "ironTool",
    count: 15
  }
];

export const defaultProfessions = [
  {
    name: "unemployed",
    count: 5
  },
  {
    name: "woodGatherer",
    type: professionTypes.PRIMARY,
    count: 5,
    efficiency: 0.0001
  },
  {
    name: "woodForester",
    type: professionTypes.SUPPORT,
    count: 0,
    efficency: 0.000001
  },
  {
    name: "ironGatherer",
    type: professionTypes.PRIMARY,
    count: 1,
    efficency: 0.00000001
  },
  {
    name: "ironMiner",
    type: professionTypes.SUPPORT,
    count: 0,
    efficency: 0.00000001
  },
  {
    name: "ironToolCrafter",
    type: professionTypes.PRIMARY,
    count: 0,
    efficency: 0.00000001
  }
];

export const defaultProfessionResources = [
  {
    profession: "woodGatherer",
    resourcesProduced: ["wood"]
  },
  {
    profession: "ironToolCrafter",
    resourcesProduced: ["ironTool"],
    resourcesConsumed: ["wood", "iron"]
  }
];
