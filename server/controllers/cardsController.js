const HttpError = require("../models/httpError")
const Card = require('../models/card')
const { validationResult } = require("express-validator")

const getCard = async (req, res, next) => {
  const cardId = req.params.id
  const card = await Card.findById(cardId)
  console.log("result of request", card)
  res.json(card)
}

const createCard = async (req, res, next) => {
  const {listId, card } = req.body
  console.log("listId", listId)
  console.log("card", card)
  const errors = validationResult(req)
  if(errors.isEmpty()) {
    try {
      const dbResponse = await Card.create({listId, ...card})
      console.log("dbResponse", dbResponse)
      res.json(dbResponse)
    } catch (e) {
      return next(new HttpError(`${e.message}`, 404))
    }
  } else {
    return next(new HttpError("Either: missing cardId or missing title", 404))
  }
}

exports.getCard = getCard
exports.createCard = createCard
