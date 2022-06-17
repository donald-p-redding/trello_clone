const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");
const List = require('../models/list');
const Board = require("../models/board");

const createList = (req, resp, next) => {
  const errors = validationResult(req);
  if(errors.isEmpty()) {
    const { boardId, list:{title} } = req.body;
    console.log("sending req to DB");      
    List.create({boardId, title}).then(list => {
      console.log("Origional DB response", list)

      //add new list to the correct board
      Board.updateOne(
        { _id: list.boardId},
        { $push: { lists: [list._id] } }
      ).then(response => {
        console.log("list added to board array")
        console.log(response);
      })

      //query for a sanatized list to return to front end
      List.find({_id: list._id}, "title _id boardId createdAt updatedAt position").then(lists => {
        console.log("Filtered list", lists);
        resp.json(lists[0]);
      });
    })
  } else {
    return next(new HttpError("Missing 'list' prop in payload or title is empty", 404));
  }
}


exports.createList = createList;