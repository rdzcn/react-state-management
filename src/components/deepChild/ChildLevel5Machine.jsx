import { useContext, useEffect, useState } from "react";
import { useActor } from "@xstate/react";
import { fetchFeatureConfig } from "../../helpers";
import { StateMachineContext } from "../../boxes/MyStateMachine";

export default function ChildLevel5Machine() {
  const [feature, setFeature] = useState({});
  const state = useContext(StateMachineContext);

  const getFeature = async () => {
    const response = await fetchFeatureConfig(500);
    setFeature(response.data);
  };

  useEffect(() => {
    getFeature();
  }, []);

  return (
    <div className="child-level-5">
      {(state.colors?.isRed && feature.isRed) ||
        (state.colors?.isGreen && feature.isGreen) ||
        (state.colors?.isYellow && feature.isYellow && (
          <div className="corner-feature">
            <span role="img" aria-label="fire">
              🔥
            </span>
          </div>
        ))}
    </div>
  );
}
