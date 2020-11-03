require("dotenv").config();

const keys = {
  "s3bucket": "samuraiswapmeet",
  "s3key": process.env.s3key,
  "s3secret": process.env.s3secret
};

module.exports = keys;