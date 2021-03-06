const {IN_PROD} = require('./app')

const ONE_HOUR = 1000 * 60 * 60
const THIRTY_MINUTES = ONE_HOUR / 2
const SIX_HOURS = ONE_HOUR * 6

const {env} = process
const {
  SESSION_SECRET = `please keep this secret, mate`,
  SESSION_NAME = `sid`,
  SESSION_LIFETIME = '',
  SESSION_IDLE_TIMEOUT = THIRTY_MINUTES,
} = env

const SESSION_ABSOLUTE_TIMEOUT = +(env.SESSION_ABSOLUTE_TIMEOUT || SIX_HOURS)

const SESSION_OPTIONS = {
  secret: SESSION_SECRET,
  name: SESSION_NAME,
  cookie: {maxAge: +SESSION_IDLE_TIMEOUT, secure: IN_PROD, sameSite: true},
  rolling: true,
  resave: false,
  saveUninitialized: false,
}

module.exports = {SESSION_OPTIONS, SESSION_NAME, SESSION_ABSOLUTE_TIMEOUT}
