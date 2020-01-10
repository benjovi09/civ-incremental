export const professionTypes = {
  PRIMARY: "primary",
  SUPPORT: "support"
};

const initialState = [
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

export default function(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        unassignedWorkers: state.unassignedWorkers - 1,
        assignedWorkers: state.assignedWorkers + 1,
        stoneGatherer: {
          ...state.stoneGatherer,
          count: state.stoneGatherer.count + 1
        }
      };
    case "decrement":
      return {
        ...state,
        unassignedWorkers: state.unassignedWorkers + 1,
        assignedWorkers: state.assignedWorkers - 1,
        stoneGatherer: {
          ...state.stoneGatherer,
          count: state.stoneGatherer.count - 1
        }
      };
    default:
      return state;
  }
}
