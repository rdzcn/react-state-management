import { useState } from "react";

const MyComponent = () => {
  const [isRed, setIsRed] = useState(false);
  const [isGreen, setIsGreen] = useState(false);

  return (
    <div>
      <div
        className={
          isRed
            ? "my-component-red"
            : isGreen
            ? "my-component-green"
            : "my-component"
        }
      >
        <button
          type="button"
          onClick={() => {
            const nextRedState = !isRed;
            if (nextRedState) {
              setIsGreen(false);
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
            }
            setIsGreen(nextGreenState);
          }}
        >
          <span role="img" aria-label="bomb">
            💣 GREEN
          </span>
        </button>
      </div>
      <div>
        <pre className="state-value" data-state-value={`isRed: ${isRed}`}></pre>
        <pre className="state-value" data-state-value={`isGreen: ${isGreen}`}></pre>
      </div>
    </div>
  );
};

export default MyComponent;
