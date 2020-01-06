const initialState = {
  unassignedWorkers: 5,
  assignedWorkers: 0,
  woodGatherer: {
    count: 0,
    efficiency: 0.001
  },
  stoneGatherer: {
    count: 0,
    efficiency: 0.001
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        stoneGatherer: {
          ...state.stoneGatherer,
          count: state.stoneGatherer.count + 1
        }
      };
    case "decrement":
      return {
        ...state,
        stoneGatherer: {
          ...state.stoneGatherer,
          count: state.stoneGatherer.count - 1
        }
      };
    default:
      return state;
  }
}