const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A list title is required']
  },
  boardId: {
    type: Number,
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
    ref: 'Card'
  }]
})

const List = mongoose.model('List', ListSchema);
module.exports = List;

// const ToySchema = new Schema({ name: String });
// const ToyBoxSchema = new Schema({
//   toys: [ToySchema],
//   buffers: [Buffer],
//   strings: [String],
//   numbers: [Number]
//   // ... etc
// });

// * Commit Message*

// Co-authored-by: Anne Jones anne1365@outlook.com