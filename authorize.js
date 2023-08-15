const authorize = (req, res, next) => {
  const {user} = req.query;
  if (user === "dexter") {
    req.user = { name: "dexter", id: 3 }
    next()
  }
  else {
    res.status(401).send("Unauthorized")
  }
}

module.exports = authorize