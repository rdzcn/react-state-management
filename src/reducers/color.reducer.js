export const COLOR_EVENTS = {
  INITIAL_FETCH: "INITIAL_FETCH",
  TOGGLE_COLOR: "TOGGLE_COLOR",
  COLOR_EVENTS: "FETCH_RESOLVE",
};

export const initialState = {
  isRed: false,
  isGreen: false,
  isYellow: false,
  status: "idle",
};

const colorReducer = (state, event) => {
  switch (event.type) {
    case COLOR_EVENTS.INITIAL_FETCH:
      return {
        ...state,
        status: "loading",
      };
    case COLOR_EVENTS.FETCH_RESOLVE:
      return {
        ...state,
        ...event.data,
        status: "success",
      };
    case COLOR_EVENTS.TOGGLE_COLOR:
      if (state.status === "success") {
        return {
          ...initialState,
          status: "success",
          [event.data]: !state[event.data],
        };
      } else {
        return state;
      }
    default:
      throw new Error(`Unhandled type: ${event.type}`);
  }
};

export default colorReducer;
