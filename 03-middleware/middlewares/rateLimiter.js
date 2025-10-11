const requestCounts = {};

export const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  requestCounts[ip] = (requestCounts[ip] || 0) + 1;

  if (requestCounts[ip] > 20) {
    return res.status(429).json({ message: "⚠️ Too many requests, slow down!" });
  }

  setTimeout(() => {
    requestCounts[ip] = requestCounts[ip] - 1;
  }, 60000);

  next();
};
