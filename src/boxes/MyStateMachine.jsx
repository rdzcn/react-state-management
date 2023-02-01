import { createContext, useEffect, useReducer, useState } from "react";
import { fetchAllColors, sleep } from "../helpers";
import DeepChild from "../components/deepChild/DeepChild";
import Img from "../components/image/Img";
import colorReducer, {
  COLOR_EVENTS,
  initialState,
} from "../reducers/color.reducer";

export const FeatureContext = createContext(null);

const MyStateMachine = () => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  const { status, ...colors } = state;

  const getAllColors = async () => {
    try {
      const response = await fetchAllColors(4000);
      return response.data;
    } catch (error) {
      return initialState;
    }
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch({ type: COLOR_EVENTS.INITIAL_FETCH });
    }
    if (status === "loading") {
      getAllColors().then((response) => {
        dispatch({ type: COLOR_EVENTS.FETCH_RESOLVE, data: response });
      });
    }
  }, [status]);

  return (
    <FeatureContext.Provider value={state}>
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
                💣 {status === "loading" ? "...Loading" : "RED"}
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
                💣 {status === "loading" ? "...Loading" : "GREEN"}
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
                💣 {status === "loading" ? "...Loading" : "YELLOW"}
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
  );
};

export default MyStateMachine;
