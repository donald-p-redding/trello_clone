const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Board title is required']
  },
  lists: [{
    type: Schema.Types.ObjectId,
    ref: 'list'
  }],
  createdAt: {
    type: String,
    default: Date.now,
    required: [true, 'A timestamp for createdAt is needed to submit.']
  },
  updatedAt: {
    type: String,
    default: Date.now,
    required: [true, 'A timestamp for createdAt is needed to submit.']
  }
})

const Board = mongoose.model('board', BoardSchema);

module.exports = Board;