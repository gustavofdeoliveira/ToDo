const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

class Token {
  createToken() {
    const token = jwt.sign(
      { id: crypto.randomUUID() },
      "4b0d30a9f642b3bfff67d0b5b28371a9",
      {
        expiresIn: "1h",
      }
    );
    return token;
  }
}

module.exports = { Token };
