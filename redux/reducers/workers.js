const initialState = {
  unassignedWorkers: 5,
  assignedWorkers: 0,
  woodGatherer: {
    count: 0,
    efficiency: 0.0001
  },
  stoneGatherer: {
    count: 0,
    efficiency: 0.00005
  }
};

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
