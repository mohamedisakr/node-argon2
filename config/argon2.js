const argon2 = require("argon2")
exports.argonOptions = {
  type: argon2.argon2id, // either Argon2i (default), Argon2d and Argon2id,
  memoryCost: 2 ** 16, // 2 ** 16 KB (64 MB) of memory
  //   hashLength: 50, //  50 character hash
}
