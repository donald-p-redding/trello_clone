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
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  position: {
    type: Number,
    default: 65535.0
  },
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'card'
  }]
})

const List = mongoose.model('list', ListSchema);
module.exports = List;

/*

In schema:
cards: [{type: ObjectId, ref: 'List'}]

Outside schema:
List.
  populate:({
    path: './card',
  })

*/