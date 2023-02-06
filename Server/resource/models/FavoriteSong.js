const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSong = new Schema(
  {
    userId: { type: String },
    name: { type: String },
    songList: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("FavoriteSong", Playlist);
