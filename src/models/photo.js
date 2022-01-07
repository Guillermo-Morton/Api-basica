const { Schema, model } = require('mongoose')

const PhotoSchema = new Schema({
    url:{
        type: String,
        required:[true, "Url is required"],
        unique: true
    },
    price:{
        type: Number,
        required:[true, "Price is required"]
    },
    event:{
        type: String,
        required:[true, "Event is required"]
    },
    status: {
        type: Boolean,
        default: true
      },
})

//Para no mostrar __v
PhotoSchema.methods.toJSON = function () {
    console.log(this.toObject())
    const { url, price, event, status, _id} = this.toObject();
    const photo  = {url, price, event, status, id : _id};
    return photo;
  };

module.exports = model("Photo", PhotoSchema)