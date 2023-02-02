import { useEffect, useState } from "react";
import { fetchAllColors } from "./helpers";

const MyAsyncComponent = () => {
  const [colors, setColors] = useState({
    isRed: false,
    isGreen: false,
    isYellow: false,
  });
  const [error, setError] = useState(false);

  const getAllColors = async () => {
    const response = await fetchAllColors(2000);
    setColors(response.data);
    setError(response.error);
  };

  useEffect(() => {
    getAllColors();
  }, []);

  return (
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
      <div>
        <pre
          class="state-value"
          data-state-value={`isRed: ${colors.isRed}`}
        ></pre>
        <pre
          class="state-value"
          data-state-value={`isGreen: ${colors.isGreen}`}
        ></pre>
        <pre
          class="state-value"
          data-state-value={`isYellow: ${colors.isYellow}`}
        ></pre>
      </div>
    </div>
  );
};

export default MyAsyncComponent;