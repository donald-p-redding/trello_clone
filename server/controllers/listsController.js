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

/*
{
  RESP
  "_id": 10,
  "title": "My list",
  "boardId": 1,
  "createdAt": "2020-10-06T23:40:26.606Z",
  "updatedAt": "2020-10-06T23:40:26.606Z",
  "position": 65535.0
}

Colleciton structure
_id :62a9fecc6873363962a6b78d
boardId:62a9fdc8aa276d36c951ef44
createdAt:"2022-10-04T06:53:39.302Z"
position:65535
title:"Todo List"
updatedAt:"2022-10-04T06:53:39.302Z"
cards:Array
*/

exports.createList = createList;