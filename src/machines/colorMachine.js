import { createMachine, assign } from "xstate";
import { initialState } from "../reducers/color.reducer";

const setInitialFetch = assign({
  colors: (context, event) => ({ ...context.colors, ...event.data }),
});

const toggleColor = assign({
  colors: (context, event) => ({
    ...initialState.colors,
    [event.data]: !context.colors[event.data],
  }),
});

export const colorMachine = createMachine({
  id: "color",
  initial: "idle",
  // Local context for entire machine
  context: initialState,
  states: {
    idle: {
      on: {
        FETCH: {
          target: "loading",
        },
      },
    },
    loading: {
      on: {
        RESOLVE: {
          target: "resolved",
          actions: setInitialFetch,
        },
        REJECT: {
          target: "rejected",
        },
      },
    },
    resolved: {
      on: {
        TOGGLE: {
          actions: toggleColor,
          target: "resolved",
        },
      },
    },
    rejected: {
      type: "final",
    },
  },
});
