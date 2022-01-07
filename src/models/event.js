const { Schema, model } = require('mongoose')

const EventSchema = new Schema({
    name:{
        type: String,
        required:[true, "Name is required"]
    },
    date:{
        type: String,
        required:[true, "Date is required"],
    },
    status: {
        type: Boolean,
        default: true,
      },
})

//Para no mostrar password ni __v
EventSchema.methods.toJSON = function () {
    const { name, _id, status, date} = this.toObject();
    const user  = { uid : _id, name, date, status };
    return user;
  };

module.exports = model("Event", EventSchema)