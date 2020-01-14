export const defaultTick = {
  tick: 0
};

export default function(state = defaultTick, action) {
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
