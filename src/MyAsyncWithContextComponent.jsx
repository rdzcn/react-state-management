import { createContext, useEffect, useState } from "react";
import { fetchAllColors, sleep } from "./helpers";
import DeepChild from "./components/deepChild/DeepChild";

export const FeatureContext = createContext(null);

const MyAsyncWithContextComponent = () => {
  const [error, setError] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [colors, setColors] = useState({});

  const getAllColors = async () => {
    const response = await fetchAllColors(1000);
    if (response.error) {
      setError(true);
      return {};
    }
    return response.data;
  };

  useEffect(() => {
    setIsFetchingData(true);
    Promise.all([getAllColors()])
      .then(([colors]) => {
        setColors(colors);
      })
      .then(() => {
        const start = new Date();
        sleep(3000);
        console.log("Takes", new Date() - start, " ms");
      })
      .finally(() => {
        setIsFetchingData(false);
      });
  }, []);

  if (isFetchingData) {
    return (
      <div className="my-component">
        <h1>...loading</h1>
      </div>
    );
  }

  return (
    !isFetchingData && (
      <FeatureContext.Provider value={colors}>
        <div>
          <div
            className={
              colors.isRed
                ? "my-component-red"
                : colors.isGreen
                ? "my-component-green"
                : colors.isYellow
                ? "my-component-yellow"
                : "my-component"
            }
          >
            <div className="button-container">
              <DeepChild />
              <img
                className="the-way-of-water"
                alt="profile-image"
                src="https://i.pravatar.cc/100"
              />
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
            <pre className="json">
              <span>COLORS</span>
              {JSON.stringify(colors, null, 2)}
            </pre>
          </div>
        </div>
      </FeatureContext.Provider>
    )
  );
};

export default MyAsyncWithContextComponent;
