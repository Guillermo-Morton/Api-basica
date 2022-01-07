const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name:{
        type: String,
        required:[true, "Name is required"]
    },
    email:{
        type: String,
        required:[true, "Email is required"],
        unique: true
    },
    password:{
        type: String,
        required:[true, "Password is required"],
    },
    role:{
        type: String,
        default: 'USER_ROLE',
        enum: ['USER_ROLE', 'ADMIN_ROLE']
    },
    photos:{
        type: Array,
        default: []
    },
    balance:{
        type:Number,
        default: 10000
    },
    status: {
        type: Boolean,
        default: true,
      },
})

//Para no mostrar password ni __v
UserSchema.methods.toJSON = function () {
    console.log(this.toObject())
    const { name, email, role, _id, status, photos, balance} = this.toObject();
    const user  = { uid : _id, name, email, role, balance, status, photos };
    return user;
  };

module.exports = model("User", UserSchema)