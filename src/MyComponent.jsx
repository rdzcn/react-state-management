import { useState } from "react";

const MyComponent = () => {
  const [isRed, setIsRed] = useState(false);

  return (
    <div>
      <div
        className={
          isRed
            ? "my-component-red"
            : "my-component"
        }
      >
        <button
          type="button"
          onClick={() => {
            const nextRedState = !isRed;
            setIsRed(nextRedState);
          }}
        >
          <span role="img" aria-label="bomb">
            💣 RED
          </span>
        </button>
      </div>
      <div>
        <pre className="state-value" data-state-value={`isRed: ${isRed}`}></pre>
      </div>
    </div>
  );
};

export default MyComponent;
