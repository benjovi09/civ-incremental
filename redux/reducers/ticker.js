const initialState = {
  tick: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "tick":
      return {
        ...state,
        tick: action.data.tick
      };
    default:
      return state;
  }
}
