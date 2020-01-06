import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Ticker() {
  const ticker = useSelector(state => state.tickReducer);
  const resources = useSelector(state => state.resourceReducer);
  const workers = useSelector(state => state.workerReducer);
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

    const tickStone =
      workers.stoneGatherer.efficiency *
      workers.stoneGatherer.count *
      elapsedTick;

    if (tickStone > 0) {
      dispatch({
        type: "GET_STONE",
        data: {
          resources: {
            stone: resources.stone + tickStone
          }
        }
      });
    }

    dispatch({
      type: "tick",
      data: {
        tick: newTick
      }
    });
  }

  return null;
}
