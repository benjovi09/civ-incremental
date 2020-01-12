import { defaultProfessions } from "../state";

export default function(state = defaultProfessions, action) {
  switch (action.type) {
    case "increment":
      return state.map(p => {
        if (p.name === action.payload) {
          p.count++;
        } else if (p.name === "unemployed") {
          p.count--;
        }
        return p;
      });
    case "decrement":
      return state.map(p => {
        if (p.name === action.payload) {
          p.count--;
        } else if (p.name === "unemployed") {
          p.count++;
        }
        return p;
      });
    default:
      return state;
  }
}
