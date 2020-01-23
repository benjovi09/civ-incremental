import { professionTypes, buildingTypes, resourceTypes } from "../enums";

export const defaultTick = {
  tick: new Date()
};

export const defaultBuildings = [
  {
    name: buildingTypes.RESIDENTIAL.HOUSE.WOOD,
    amount: 5
  },
  {
    name: "blacksmith",
    type: buildingTypes.COMMERCIAL
  },
  {
    name: buildingTypes.INDUSTRIAL.MINE.WOOD,
    amount: 0,
    professionLimits: [
      {
        profession: professionTypes.SUPPORT.FORESTER,
        limitPerBuilding: 4
      }
    ],
    costs: [
      {
        name: resourceTypes.STONE,
        amount: 100
      },
      {
        name: resourceTypes.IRON,
        amount: 50
      }
    ]
  },
  {
    name: buildingTypes.INDUSTRIAL.MINE.IRON,
    amount: 0,
    professionLimits: [
      {
        profession: professionTypes.SUPPORT.MINER.IRON,
        limitPerBuilding: 4
      }
    ],
    costs: [
      {
        name: resourceTypes.STONE,
        amount: 250
      },
      {
        name: resourceTypes.WOOD,
        amount: 500
      }
    ]
  }
];

export const defaultResources = [
  {
    name: resourceTypes.WOOD,
    count: 50
  },
  {
    name: resourceTypes.STONE,
    count: 25
  },
  {
    name: resourceTypes.IRON,
    count: 10
  },
  {
    name: "ironTool",
    count: 15
  }
];

export const defaultProfessions = [
  {
    name: professionTypes.UNEMPLOYED,
    count: 5
  },
  {
    name: professionTypes.PRIMARY.GATHERER,
    count: 5,
    efficiency: 0.0001
  },
  {
    name: professionTypes.SUPPORT.FORESTER,
    count: 0,
    efficency: 0.000001
  },
  {
    name: professionTypes.SUPPORT.MINER.IRON,
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
    profession: professionTypes.PRIMARY.GATHERER,
    resourcesProduced: [
      {
        name: resourceTypes.WOOD,
        efficiency: 0.6
      },
      {
        name: resourceTypes.STONE,
        efficiency: 0.3
      },
      {
        name: resourceTypes.IRON,
        efficiency: 0.1
      }
    ]
  },
  {
    profession: "ironToolCrafter",
    resourcesProduced: [
      {
        name: "ironTool",
        efficiency: 1
      }
    ],
    resourcesConsumed: [
      {
        name: resourceTypes.WOOD,
        efficiency: 0.5
      },
      {
        name: resourceTypes.IRON,
        efficiency: 0.5
      }
    ]
  }
];
