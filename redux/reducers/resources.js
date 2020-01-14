import { defaultResources } from "../state";

export default function(state = defaultResources, action) {
  switch (action.type) {
    case "tick":
      return state.map(r => {
        console.log(r);
        console.log(
          action.data.resources.find(gr => gr.resourceList?.includes(r.name))
            ?.resourceTick
        );

        debugger;
        return {
          name: r.name,
          count:
            r.count +
              action.data.resources.find(gr =>
                gr.resourceList?.includes(r.name)
              )?.resourceTick || 0
        };
      });
    default:
      return state;
  }
}
