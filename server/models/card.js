const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A card must have a title']
  },
  description: {
    type: String,
    default: ''
  },
  labels: [String],
  listId: {
    type: Schema.Types.ObjectId,
    ref: 'list',
    required: [true, 'A card must be assoc. with a list']
  },
  position: {
    type: Number,
    default: 65535.0
  },
  archived: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date
  },
  completed: {
    type: Boolean,
    default: false
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'board',
    required: [true, 'A card must be assoc. with a board']
  },
  comments: [String],
  commentsCount: {
    type: Number,
  },
  actions: [String]
})

const Card = mongoose.model('card', CardSchema);
module.exports = Card;
