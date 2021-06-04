const client = global.client;
const cfg = require("../configs/config.json");
const StatDatabase = require("../schemas/Stat");
const moment = require("moment");
const { MessageEmbed } = require("discord.js");

module.exports = async () => {
  
  let LeaderBoard = await client.guilds.cache.get(cfg.Server.GuildID).channels.cache.get(cfg.Channels.VoiceLeaderBoard).messages.fetch(cfg.Server.VoiceMsgListID);
  setInterval(() => {
  checkingLeader()
  }, 1800000);
  function checkingLeader() {  
  StatDatabase.find({ SunucuID: cfg.Server.GuildID }, async (err, res) => {
  res = res.filter(x => client.guilds.cache.get(cfg.Server.GuildID).members.cache.get(x.userID));
  const List = res.filter(x => x && x.VoiceNumber !== 0).sort((x, y) => y.VoiceNumber - x.VoiceNumber).map((val, i) =>`\`${i + 1}.\` ${client.guilds.cache.get(cfg.Server.GuildID).members.cache.get(val.userID)}: ${client.parseTime(val.VoiceNumber)}`).splice(0, 30).join("\n");
  let MessageEdit = new MessageEmbed()
  MessageEdit.setColor("BLACK")
  MessageEdit.setAuthor(`Ses Sıralaması | Tüm Zamanlar`, client.guilds.cache.get(cfg.Server.GuildID).iconURL({dynamic:true}))
  MessageEdit.setFooter(`Güncellenme: ${moment(Date.parse(new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" }))).locale("TR").format("LLL")}`)
  MessageEdit.setDescription(`${List}` )
  LeaderBoard.edit(MessageEdit)});}

}

module.exports.conf = {
  name: "ready",
};
