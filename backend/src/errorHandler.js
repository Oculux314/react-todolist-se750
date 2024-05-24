export function notFound(req, res, next) {
  res.status(404).json({ message: "Not found" });
}

export function errorhandler(err, req, res, next) {
  console.error(err.message);
  res.status(500).json({
    message: err.message ?? "Internal server error. Please contact an admin.",
  });
}
