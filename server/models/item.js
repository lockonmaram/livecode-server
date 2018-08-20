const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  stock: {
    type: Number,
    require: true
  },
  tags: {
    type: Array,
    default: []
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item
