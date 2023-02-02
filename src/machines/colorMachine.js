import { createMachine, assign } from "xstate";
import { initialState } from "../reducers/color.reducer";

const setInitialFetch = assign({
  colors: (context, event) => ({ ...context.colors, ...event.data }),
  status: "success",
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
      type: "final",
    },
    rejected: {
      type: "final",
    },
  },
});
