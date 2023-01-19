const retryPromise = async function (fn, retry, delay) {
  try {
    const result = await fn();
    console.log(result);
  } catch (error) {
    if (retry <= 0) {
      return Promise.reject(error);
    }
    await wait(delay);
    return retryPromise(fn, retry - 1);
  }
};
