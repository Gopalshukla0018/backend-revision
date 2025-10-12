
let count = 0;

export const requestCounter = (req, res, next) => {
  count++;
  console.log(`📦 Total requests received till now: ${count}`);
  next();
};
