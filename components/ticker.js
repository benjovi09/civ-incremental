import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { professionTypes } from "../enums";

export default function Ticker() {
  const ticker = useSelector(state => state.tickReducer);
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
    const resourcesProduced = professions
      .filter(p => p.count > 0 && p.name !== professionTypes.UNEMPLOYED)
      .map(p => {
        return {
          resourceTick: p.efficiency * p.count * elapsedTick,
          resourceList: professionResources.find(pr => pr.profession === p.name)
            ?.resourcesProduced
        };
      });

    resourcesProduced.forEach(element => {
      dispatch({
        type: "tick",
        data: {
          tick: newTick,
          resources: element
        }
      });
    });
  }
  return null;
}
