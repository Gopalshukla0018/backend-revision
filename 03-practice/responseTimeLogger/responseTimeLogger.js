export const responseTimeLogger = (req, res, next) => {
  const start = Date.now(); // capture start time

  res.on("finish", () => {
    const end = Date.now();
    const responseTime = end - start;
    console.log(`${req.method} ${req.url} - ${responseTime}ms`);
  });

  next(); // move to next middleware or route
};
