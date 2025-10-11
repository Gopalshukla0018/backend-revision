export const maintenanceMode = (req, res, next) => {
  const isMaintenance = false; // true = maintenance ON
  if (isMaintenance) {
    return res
      .status(503)
      .json({ message: "🚧 Site under maintenance. Please try later." });
  }
  next();
};
