import { createContext, useEffect, useReducer } from "react";
import { useMachine, useInterpret, createActorContext } from "@xstate/react";
import { fetchAllColors, sleep } from "../helpers";
import DeepChild from "../components/deepChild/DeepChild";
import Img from "../components/image/Img";
import colorReducer, {
  COLOR_EVENTS,
  initialState,
} from "../reducers/color.reducer";
import { colorMachine } from "../machines/colorMachine";

export const StateMachineContext = createContext({});

const MyStateMachine = () => {
  const [current, send] = useMachine(colorMachine);
  const colorService = useInterpret(colorMachine);

  console.log("CURRENT MACHINE STATE", current);
  console.log("color service", colorService);
  const { status, colors = {} } = current.context || {};

  const getAllColors = async () => {
    try {
      const response = await fetchAllColors(4000);
      return response.data;
    } catch (error) {
      return initialState;
    }
  };

  // console.log("COLOR SERVICE, IN Component", colorService);

  useEffect(() => {
    if (current.value === "idle") {
      // dispatch({ type: COLOR_EVENTS.INITIAL_FETCH });
      send({ type: "FETCH" });
    }
    if (current.value === "loading") {
      getAllColors().then((response) => {
        // dispatch({ type: COLOR_EVENTS.FETCH_RESOLVE, data: response });
        send({ type: "RESOLVE", data: response });
      });
    }
  }, [current.value]);

  return (
    <StateMachineContext.Provider value={current.context}>
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
    </StateMachineContext.Provider>
  );
};

export default MyStateMachine;
