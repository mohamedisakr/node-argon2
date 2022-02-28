const {IN_PROD, APP_PORT} = require("./app")
const {REDIS_OPTIONS} = require("./cache")
const {
  SESSION_OPTIONS,
  SESSION_NAME,
  SESSION_ABSOLUTE_TIMEOUT,
} = require("./session")
const {MONGODB_URI, MONGODB_OPTIONS} = require("./db")
const {BCRYPT_WORK_FACTOR, BCRYPT_MAX_BYTES} = require("./auth")
const {argonOptions} = require("./argon2")

module.exports = {
  IN_PROD,
  APP_PORT,
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  SESSION_NAME,
  SESSION_ABSOLUTE_TIMEOUT,
  MONGODB_URI,
  MONGODB_OPTIONS,
  BCRYPT_WORK_FACTOR,
  BCRYPT_MAX_BYTES,
  argonOptions,
}
