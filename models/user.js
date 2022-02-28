// const {hash, compare} = require("bcryptjs")
const {hash, verify} = require("argon2")
const {Schema, model} = require("mongoose")
const {BCRYPT_WORK_FACTOR, argonOptions} = require("../config")

const userSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
  },
  {timestamps: true},
)

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await hash(this.password, argonOptions)
  }
})

// implement async version
userSchema.methods.matchPassword = function (password) {
  // return compare(password, this.password)
  return verify(this.password, password)
}

userSchema.set("toJSON", {
  transform: (doc, {__v, password, ...rest}, options) => rest,
})

const User = model("user", userSchema)
module.exports = User

// bcryptjs celebrate connect-redis express express-session ioredis joi mongoose
