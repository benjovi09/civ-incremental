import { defaultResources } from "../state";

export default function(state = defaultResources, action) {
  switch (action.type) {
    case "tick":
      return state.map(r => {
        let efficiency = 0;
        if (action.data.resources.resourceList.some(l => l.name === r.name)) {
          efficiency = action.data.resources.resourceList.find(
            i => i.name === r.name
          ).efficiency;
        }
        return {
          name: r.name,
          count: r.count + action.data.resources.resourceTick * efficiency
        };
      });
    default:
      return state;
  }
}
