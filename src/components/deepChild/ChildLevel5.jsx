import { useContext, useEffect, useState } from "react";
import { fetchFeatureConfig } from "../../helpers";
import { FeatureContext } from "../../boxes/MyAsyncWithContextComponent";

export default function ChildLevel5() {
  const [feature, setFeature] = useState({});
  const state = useContext(FeatureContext);
  const { status, colors } = state;

  const getFeature = async () => {
    const response = await fetchFeatureConfig(500);
    setFeature(response.data);
  };

  useEffect(() => {
    getFeature();
  }, []);

  return (
    <div className="child-level-5">
      {(colors.isRed && feature.isRed) ||
        (colors.isGreen && feature.isGreen) ||
        (colors.isYellow && feature.isYellow && (
          <div className="corner-feature">
            <span role="img" aria-label="fire">
              🔥
            </span>
          </div>
        ))}
    </div>
  );
}
