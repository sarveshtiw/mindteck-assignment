const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const md5 = require("md5");
const validator = require("validator");
const mongoDbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const reviewSchema = new Schema({
  store: {
    type: String,
    required: "Please fill store name",
    trim: true
  },
  author: {
    type: String,
    required: "Please fill author name",
    trim: true
  },
  text: {
    type: String,
    required: "Please fill the your message",
    trim: true
  },
  rating: {
    type: String,
    required: "Please give the rating",
    trim: true
  }
});

reviewSchema.plugin(passportLocalMongoose, { authorField: "author" });
reviewSchema.plugin(mongoDbErrorHandler);

module.exports = mongoose.model("Review", reviewSchema);
