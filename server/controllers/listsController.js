const Board = require("../models/board");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");
const List = require('../models/list');

const createList = (req, resp, next) => {
  const errors = validationResult(req);
  if(errors.isEmpty()) {
    const { boardId, list:{title} } = req.body;
    console.log("sending req to DB");      
    List.create({boardId, title}).then(list => {
      console.log("Origional DB response", list)
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