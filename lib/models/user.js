"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  role: {
    type: String,
    "default": 'USER_ROLE',
    "enum": ['USER_ROLE', 'ADMIN_ROLE']
  },
  photos: {
    type: Array,
    "default": []
  },
  status: {
    type: Boolean,
    "default": true
  }
}); //Para no mostrar password ni __v

UserSchema.methods.toJSON = function () {
  console.log(this.toObject());

  var _this$toObject = this.toObject(),
      name = _this$toObject.name,
      email = _this$toObject.email,
      role = _this$toObject.role,
      _id = _this$toObject._id,
      status = _this$toObject.status;

  var user = {
    name: name,
    email: email,
    role: role,
    uid: _id,
    status: status
  };
  return user;
};

module.exports = model("User", UserSchema);