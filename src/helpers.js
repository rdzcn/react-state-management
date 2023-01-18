const delay = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export const fetchAllColors = async (ms) => {
  await delay(ms);
  return {
    data: {
      isRed: false,
      isGreen: true,
      isYellow: false,
    },
    error: false,
  };
};

export const fetchFeatureConfig = async (ms) => {
  await delay(ms);
  return {
    data: {
      isRed: false,
      isGreen: false,
      isYellow: true,
    },
    error: false,
  };
};
