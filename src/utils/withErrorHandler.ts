// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withErrorHandler = (callback: () => any) => {
  try {
    callback();
  } catch (error) {
    console.warn(error);
  }
};
