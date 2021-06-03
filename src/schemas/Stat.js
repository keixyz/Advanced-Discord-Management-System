const mongoose = require("mongoose");

const Veri = mongoose.Schema({
  SunucuID: String,
  userID: String,
  ToplamSes: Map,
  ToplamMesaj: Map,
  ToplamSesWeek: Map,
  ToplamMesajWeek: Map,
  VoiceNumber: Number,
  MessageNumber: Number,
  MessageDaily: Number,
  MessageWeek: Number
});

module.exports = mongoose.model("Stats", Veri);