export const COLOR_EVENTS = {
  INITIAL_FETCH: "INITIAL_FETCH",
  TOGGLE_COLOR: "TOGGLE_COLOR",
  COLOR_EVENTS: "FETCH_RESOLVE",
};

export const initialState = {
  colors: {
    isRed: false,
    isGreen: false,
    isYellow: false,
  },
  status: "idle",
};

const colorReducer = (state, event) => {
  switch (state.status) {
    case "idle":
      if (event.type === COLOR_EVENTS.INITIAL_FETCH) {
        return {
          ...state,
          status: "loading",
        };
      } else {
        return state;
      }
    case "loading":
      if (event.type === COLOR_EVENTS.FETCH_RESOLVE) {
        return {
          ...state,
          colors: { ...event.data },
          status: "success",
        };
      } else {
        return state;
      }
    case "success":
      if (event.type === COLOR_EVENTS.TOGGLE_COLOR) {
        return {
          colors: {
            ...initialState.colors,
            [event.data]: !state.colors[event.data],
          },
          status: "success",
        };
      } else {
        return state;
      }
    default:
      throw new Error(`Unhandled type: ${event.type}`);
  }
};

export default colorReducer;
