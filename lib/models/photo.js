"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var PhotoSchema = new Schema({
  url: {
    type: String,
    required: [true, "Url is required"],
    unique: true
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  event: {
    type: String,
    required: [true, "Event is required"]
  },
  status: {
    type: Boolean,
    "default": true
  }
}); //Para no mostrar __v

PhotoSchema.methods.toJSON = function () {
  console.log(this.toObject());

  var _this$toObject = this.toObject(),
      url = _this$toObject.url,
      price = _this$toObject.price,
      event = _this$toObject.event,
      status = _this$toObject.status,
      _id = _this$toObject._id;

  var photo = {
    url: url,
    price: price,
    event: event,
    status: status,
    id: _id
  };
  return photo;
};

module.exports = model("Photo", PhotoSchema);