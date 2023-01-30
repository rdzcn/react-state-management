import { useState } from "react";

const MyComponent = () => {
  const [colors, setColors] = useState({
    isRed: false,
    isGreen: false,
    isYellow: false
  });

  return (
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
        <button
          type="button"
          onClick={() => {
            const nextRedState = !colors.isRed;
            setColors({
                isGreen: nextRedState ? false : colors.isGreen,
                isYellow: nextRedState ? false : colors.isYellow,
                isRed: nextRedState
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
                isRed: nextGreenState ? false : colors.isRed
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
              isRed: nextYellowState ? false : colors.isRed
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
            className="state-value"
            data-state-value={`isRed: ${colors.isRed}`}
          ></pre>
          <pre
            className="state-value"
            data-state-value={`isGreen: ${colors.isGreen}`}
          ></pre>
          <pre
            className="state-value"
            data-state-value={`isYellow: ${colors.isYellow}`}
          ></pre>
      </div>
    </div>
  );
};

export default MyComponent;
