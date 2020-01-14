import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Ticker() {
  const ticker = useSelector(state => state.tickReducer);
  const resources = useSelector(state => state.resourceReducer);
  const professions = useSelector(state => state.professionReducer);
  const professionResources = useSelector(
    state => state.professionResourceReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    const newTick = new Date();
    const elapsedTick = newTick - ticker.tick;
    const resourcesProduced = professions.map(p => {
      debugger;
      return {
        resourceTick: p.efficiency * p.count * elapsedTick,
        resourceList: professionResources.find(pr => pr.profession === p.name)
          ?.resourcesProduced
      };
    });
    dispatch({
      type: "tick",
      data: {
        tick: newTick,
        resources: resourcesProduced.filter(rp => rp.resourceTick > 0)
      }
    });
  }
  return null;
}
