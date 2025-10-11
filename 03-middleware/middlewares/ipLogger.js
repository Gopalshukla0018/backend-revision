export const ipLogger = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  console.log(`📡 IP: ${ip}`);
  next();
};
