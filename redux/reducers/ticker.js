import { defaultTick } from "../state";

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
