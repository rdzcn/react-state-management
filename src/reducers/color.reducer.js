export const COLOR_EVENTS = {
  INITIAL_FETCH: "INITIAL_FETCH",
  TOGGLE_COLOR: "TOGGLE_COLOR",
};

const initialState = {
  isRed: false,
  isGreen: false,
  isYellow: false,
};

const colorReducer = (state, event) => {
  switch (event.type) {
    case COLOR_EVENTS.INITIAL_FETCH:
      return {
        ...initialState,
        ...event.data,
      };
    case COLOR_EVENTS.TOGGLE_COLOR:
      return {
        ...initialState,
        [event.data]: !state[event.data],
      };
    default:
      throw new Error(`Unhandled type: ${event.type}`);
  }
};

export default colorReducer;
