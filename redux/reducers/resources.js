import { defaultResources } from "../state";

export default function (state = defaultResources, action) {
  switch (action.type) {
    case "GET_STONE":
      return {
        ...state,
        stone: action.data.resources.stone
      };
    default:
      return state;
  }
}
