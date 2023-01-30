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

export const sleep = (ms) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
};
