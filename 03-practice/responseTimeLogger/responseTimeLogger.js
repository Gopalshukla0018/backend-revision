export const responseTimeLogger = (req, res, next) => {
  const start = Date.now();

  // finish event tab fire hoga jab response complete ho jaye
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${duration}ms`);
  });

  next();
};
