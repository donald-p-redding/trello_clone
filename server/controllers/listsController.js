const HttpError = require("../models/httpError")
const { validationResult } = require("express-validator")
const List = require('../models/list')
const Board = require("../models/board")

const createList = (req, resp, next) => {
  const errors = validationResult(req)

  if(errors.isEmpty()) {
    const { boardId, list:{title} } = req.body

    List.create({boardId, title}).then(list => {
      //add new list to the correct board
      Board.updateOne(
        { _id: list.boardId},
        { $push: { lists: [list._id] } }
      ).then(response => {
        console.log(response)
      })

      //query for a sanatized list to return to front end
      List.find({_id: list._id}, "title _id boardId createdAt updatedAt position").then(lists => {
        resp.json(lists[0])
      })
    })
  } else {
    return next(new HttpError("Missing 'list' prop in payload or title is empty", 404))
  }
}

const updateListTitle = async (req, res, next) => {
  const listId = req.params.id
  const errors = validationResult(req)

  if(errors.isEmpty()) {
    try {
      const { title } = req.body
      const resp = await List.findByIdAndUpdate(listId, {title}, )
      List.find({_id: listId}, "title _id boardId createdAt updatedAt position").then(lists => {
        console.log(lists[0])
        res.json(lists[0])
      })
      
    } catch (e) {
      next(new HttpError(`${e.message}`, 500))
    }
  } else {
    next(new HttpError("The title field is empty.", 404))
  }
}

exports.createList = createList
exports.updateListTitle = updateListTitle