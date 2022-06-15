const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A card must have a title']
  },
  dueDate: {
    default: null
  },
  labels: [String],
  description: {
    type: String
  },
  listId: {
    type: Schema.Types.ObjectId,
    ref: 'list',
    required: [true, 'A card must be assoc. with a list']
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'board',
    required: [true, 'A card must be assoc. with a board']
  },
  position: {
    type: Number
  },
  commentsCount: {
    type: Number,
  }
})

const Card = mongoose.model('card', CardSchema);
module.exports = Card;