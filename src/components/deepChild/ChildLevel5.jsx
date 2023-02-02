import { useContext, useEffect, useState } from "react";
import { fetchFeatureConfig } from "../../helpers";
import { FeatureContext } from "../../MyAsyncWithContextComponent";

export default function ChildLevel5() {
  const [error, setError] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [feature, setFeature] = useState({});
  const colors = useContext(FeatureContext);

  const getFeature = async () => {
    const response = await fetchFeatureConfig(5000);
    if (response.error) {
      setError(true);
      return {};
    }
    return response.data;
  };

  useEffect(() => {
    setIsFetchingData(true);
    Promise.all([getFeature()])
      .then(([colors]) => {
        setFeature(colors);
      })
      .finally(() => {
        setIsFetchingData(false);
      });
  }, []);

  return (
    !isFetchingData && (
      <div class="child-level-5">
        {(colors.isRed && feature.isRed) ||
          (colors.isGreen && feature.isGreen) ||
          (colors.isYellow && feature.isYellow && (
            <div class="corner-feature">
              <span role="img" aria-label="fire">
                🔥
              </span>
            </div>
          ))}
      </div>
    )
  );
}
