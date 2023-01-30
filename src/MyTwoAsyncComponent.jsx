import { useEffect, useState } from "react";
import { fetchAllColors } from "./helpers";

const MyTwoAsyncComponent = () => {
  const [error, setError] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [colors, setColors] = useState({
    isRed: false,
    isGreen: false,
    isYellow: false,
  });

  const getAllColors = async () => {
    const response = await fetchAllColors(1000);
    if (response.error) {
      setError(true);
      return {};
    }
    return response.data;
  };

  useEffect(() => {
    setIsFetchingData(true);
    Promise.all([getAllColors()])
      .then(([colors]) => {
        setColors(colors);
      })
      .finally(() => {
        setIsFetchingData(false);
      });
  }, []);

  if (isFetchingData) {
    return <div className="my-component" />;
  }

  return (
    !isFetchingData && (
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
          <div className="button-container">
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
        </div>
        <div>
          <pre className="json">
            <span>COLORS</span>
            {JSON.stringify(colors, null, 2)}
          </pre>
        </div>
      </div>
    )
  );
};

export default MyTwoAsyncComponent;
