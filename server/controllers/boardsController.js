const Board = require("../models/board");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

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
  Board.findById(boardId).then((product) => {
    res.json(product)
  })
  //how to query mongo db for spec. board
}

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
          (board) => res.json({ board })
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


// { 
//   "v" : NumberInt(2), 
//   "key" : {
//       "_id" : NumberInt(1)
//   }, 
//   "name" : "_id_", 
//   "indexSize" : NumberInt(20480)
// }


// { 
//   "_id" : NumberInt(1), 
//   "title" : "Web Dev", 
//   "createdAt" : "2022-10-04T05:57:02.777Z", 
//   "updatedAt" : "2022-10-04T05:57:02.777Z", 
//   "lists" : [
//       {
//           "_id" : NumberInt(4), 
//           "title" : "HTML", 
//           "boardId" : NumberInt(1), 
//           "createdAt" : "2022-10-04T06:53:39.302Z", 
//           "updatedAt" : "2022-10-04T06:53:39.302Z", 
//           "position" : 65535.0, 
//           "cards" : [
//               {
//                   "_id" : NumberInt(8), 
//                   "title" : "2", 
//                   "dueDate" : null, 
//                   "labels" : [
//                       "red", 
//                       "purple"
//                   ], 
//                   "description" : "Selectors", 
//                   "listId" : NumberInt(3), 
//                   "boardId" : NumberInt(1), 
//                   "position" : 65535.0, 
//                   "commentsCount" : NumberInt(0)
//               }
//           ]
//       }
//   ]
// }