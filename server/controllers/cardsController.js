const HttpError = require("../models/httpError")

const getCard = (req, res, next) => {
  const cardId = req.params.id;
  res.json({msg: "endpoint is good", cardId});
}

exports.getCard = getCard