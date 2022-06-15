const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A list title is required']
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'board',
    required: [true, 'A list must have a boardId']
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: [true, 'A timestamp for createdAt is needed to submit.']
  },
  updatedAt: {
    type: Date,
    required: [true, 'A timestamp for updatedAt is needed to submit.']
  },
  position: {
    type: Number
  },
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'card'
  }]
})

const List = mongoose.model('list', ListSchema);
module.exports = List;
