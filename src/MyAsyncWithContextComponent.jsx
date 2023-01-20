import { useEffect, useState } from "react";
import { fetchAllColors, fetchFeatureConfig } from "./helpers";
import DeepChild from "./components/deepChild/DeepChild";

const MyAsyncWithContextComponent = () => {
  const [error, setError] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [colors, setColors] = useState({
    isRed: false,
    isGreen: false,
    isYellow: false,
  });

  const [feature, setFeature] = useState({
    isRed: false,
    isGreen: false,
    isYellow: false,
  });

  const getAllColors = async () => {
    const response = await fetchAllColors(4000);
    if (response.error) {
      setError(true);
      return {};
    }
    return response.data;
  };

  const getFeature = async () => {
    const response = await fetchFeatureConfig(500);
    if (response.error) {
      setError(true);
      return {};
    }
    return response.data;
  };

  useEffect(() => {
    setIsFetchingData(true);
    Promise.all([getAllColors(), getFeature()])
      .then(([colors, feature]) => {
        setColors(colors);
        setFeature(feature);
      })
      .finally(() => {
        setIsFetchingData(false);
      });
  }, []);

  if (isFetchingData) {
    return <div class="my-component" />;
  }

  return (
    !isFetchingData && (
      <div>
        <div
          class={
            colors.isRed
              ? "my-component-red"
              : colors.isGreen
              ? "my-component-green"
              : colors.isYellow
              ? "my-component-yellow"
              : "my-component"
          }
        >
          <div class="button-container">
            <DeepChild />
            <button
              type="button"
              onClick={() => {
                const nextRedState = !colors.isRed;
                setColors({
                  isGreen: nextRedState ? false : colors.isGreen,
                  isYellow: nextRedState ? false : colors.isYellow,
                  isRed: nextRedState,
                });
              }}
            >
              <span role="img" aria-label="bomb">
                💣 RED
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                const nextGreenState = !colors.isGreen;
                setColors({
                  isGreen: nextGreenState,
                  isYellow: nextGreenState ? false : colors.isYellow,
                  isRed: nextGreenState ? false : colors.isRed,
                });
              }}
            >
              <span role="img" aria-label="bomb">
                💣 GREEN
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                const nextYellowState = !colors.isYellow;
                setColors({
                  isGreen: nextYellowState ? false : colors.isGreen,
                  isYellow: nextYellowState,
                  isRed: nextYellowState ? false : colors.isRed,
                });
              }}
            >
              <span role="img" aria-label="bomb">
                💣 YELLOW
              </span>
            </button>
          </div>
        </div>
        <div>
          <pre class="json">
            <span>COLORS</span>
            {JSON.stringify(colors, null, 2)}
          </pre>
          <pre class="json">
            <span>Feature</span>
            {JSON.stringify(feature, null, 2)}
          </pre>
        </div>
      </div>
    )
  );
};

export default MyAsyncWithContextComponent;
