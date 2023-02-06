const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const Singer = new Schema(
  {
    name: { type: String, require: true },
    img: { type: String },
    nation: { type: String },
    album: { type: String },
    description: { type: String },
    comment: [],
  },
  { timestamps: true }
);

Singer.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model("Singer", Singer);
