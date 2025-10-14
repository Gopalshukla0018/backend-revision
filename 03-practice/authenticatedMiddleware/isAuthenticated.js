// middlewares/isAuthenticated.js
export const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Normally, you would verify token here
  console.log(" User authenticated");
  next();
};
