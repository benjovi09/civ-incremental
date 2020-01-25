import { defaultResources } from "../state";

export default function(state = defaultResources, action) {
  switch (action.type) {
    case "tick":
      return state.map(resource => {
        return {
          name: resource.name,
          count: addResourceTick(resource.count, action.data.resources)
        };
      });
    default:
      return state;
  }
}

function addResourceTick(amount, resources) {
  debugger;
  if (resources.some(gr => gr.resourceList?.includes(resources.name))) {
    return amount + resources.find(gr => gr.resourceList?.includes(r.name))?.resourceTick;
  }
}
