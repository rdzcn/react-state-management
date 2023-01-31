import { createContext, useEffect, useReducer, useState } from "react";
import { fetchAllColors, sleep } from "../helpers";
import DeepChild from "../components/deepChild/DeepChild";
import Img from "../components/image/Img";
import colorReducer, { COLOR_EVENTS } from "../reducers/color.reducer";

export const FeatureContext = createContext(null);

const MyAsyncWithContextComponent = () => {
  const [error, setError] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [colors, dispatch] = useReducer(colorReducer, {
    isRed: false,
    isGreen: false,
    isYellow: false,
  });

  const getAllColors = async () => {
    const response = await fetchAllColors(4000);
    setIsFetchingData(false);
    if (response.error) {
      setError(true);
      return {};
    }
    dispatch({ type: COLOR_EVENTS.INITIAL_FETCH, data: response.data });
  };

  useEffect(() => {
    setIsFetchingData(true);
    getAllColors();
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
              <Img />
              <button
                type="button"
                onClick={() => {
                  dispatch({ type: COLOR_EVENTS.TOGGLE_COLOR, data: "isRed" });
                }}
              >
                <span role="img" aria-label="bomb">
                  💣 RED
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  dispatch({
                    type: COLOR_EVENTS.TOGGLE_COLOR,
                    data: "isGreen",
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
                  dispatch({
                    type: COLOR_EVENTS.TOGGLE_COLOR,
                    data: "isYellow",
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
