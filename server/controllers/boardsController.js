const Board = require("../models/board");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");
const List = require('../models/list');
const Card = require('../models/card');
const getBoards = (req, res, next) => {
  Board.find({}, "title _id createdAt updatedAt").then((boards) => {
    res.json({
      boards,
    });
  });
};
const getBoard = (req, res, next) => {
  const boardId = req.params.id;
  console.log(boardId)
  Board.findById(boardId).populate({path: 'lists', populate: {path:'cards'}}).then(board => {
    res.json(board);
  })
}

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
          (board) => res.json(board)
        );
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

exports.getBoards = getBoards;
exports.getBoard = getBoard;
exports.createBoard = createBoard;

/*
*Board
{
  "_id":{"$oid":"62aa0cb650e2fec1545cbc53"},
  "title":"Sherlock's Board",
  "createdAt":"2022-07-15T09:57:02.777Z",
  "updatedAt":"2022-07-15T05:12:02.777Z",
  "lists":[]
}

*List
  {
    "_id":{"$oid":"62aa0d2150e2fec1545cbc55"},
    "title":"Todo List","boardId":{"$oid":"62aa0cb650e2fec1545cbc53"},
    "createdAt":"2022-07-15T06:53:39.302Z",
    "updatedAt":"2022-07-15T06:53:39.302Z",
    "position":{"$numberDouble":"45000.0"},
    "cards":[{"$oid":"62aa0d4a50e2fec1545cbc58"},]

*Card
    {
      "_id":{"$oid":"62aa0d4a50e2fec1545cbc58"},
      "title":"Sleep",
      "dueDate":null,
      "labels":["red","purple"],
      "description":"Selectors",
      "listId":{"$oid":"62aa0d2150e2fec1545cbc55"},
      "boardId":{"$oid":"62aa0cb650e2fec1545cbc53"},
      "position":{"$numberDouble":"45100.0"},
      "commentsCount":{"$numberInt":"0"}
    }
*/