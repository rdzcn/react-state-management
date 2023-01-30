import { useState } from "react";

const MyComponent = () => {
  const [isRed, setIsRed] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  const [isYellow, setIsYellow] = useState(false);

  return (
    <div>
      <div
        className={
          isRed
            ? "my-component-red"
            : isGreen
            ? "my-component-green"
            : isYellow
            ? "my-component-yellow"
            : "my-component"
        }
      >
        <button
          type="button"
          onClick={() => {
            const nextRedState = !isRed;
            if (nextRedState) {
              setIsGreen(false);
              setIsYellow(false);
            }
            setIsRed(nextRedState);
          }}
        >
          <span role="img" aria-label="bomb">
            💣 RED
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            const nextGreenState = !isGreen;
            if (nextGreenState) {
              setIsRed(false);
              setIsYellow(false);
            }
            setIsGreen(nextGreenState);
          }}
        >
          <span role="img" aria-label="bomb">
            💣 GREEN
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            const nextYellowState = !isYellow;
            if (nextYellowState) {
              setIsRed(false);
              setIsGreen(false);
            }
            setIsYellow(nextYellowState);
          }}
        >
          <span role="img" aria-label="bomb">
            💣 YELLOW
          </span>
        </button>
      </div>
      <div>
        <pre className="state-value" data-state-value={`isRed: ${isRed}`}></pre>
        <pre className="state-value" data-state-value={`isGreen: ${isGreen}`}></pre>
        <pre
          className="state-value"
          data-state-value={`isYellow: ${isYellow}`}
        ></pre>
      </div>
    </div>
  );
};

export default MyComponent;
