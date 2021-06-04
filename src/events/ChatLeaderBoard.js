const client = global.client;
const cfg = require("../configs/config.json");
const StatDatabase = require("../schemas/Stat");
const moment = require("moment");
const { MessageEmbed } = require("discord.js");

module.exports = async () => {
  
  let LeaderBoard = await client.guilds.cache.get(cfg.Server.GuildID).channels.cache.get(cfg.Channels.ChatLeaderBoard).messages.fetch(cfg.Server.ChatMsgListID);
  setInterval(() => {
  ChatLeaderBoard()
  }, 1800000);
  function ChatLeaderBoard() {  
  StatDatabase.find({ SunucuID: cfg.Server.GuildID }, async (err, res) => {
  res = res.filter(x => client.guilds.cache.get(cfg.Server.GuildID).members.cache.get(x.userID));
  const msgList = res.filter(x => x && x.MessageNumber !== 0).sort((x, y) => y.MessageNumber - x.MessageNumber).map((val, i) =>`\`${i + 1}.\` ${client.guilds.cache.get(cfg.Server.GuildID).members.cache.get(val.userID)}: ${val.MessageNumber} mesaj`).splice(0, 30).join("\n");
  let Chat = new MessageEmbed()
  Chat.setColor("BLACK")
  Chat.setAuthor(`Mesaj Sıralaması | Tüm Zamanlar`, client.guilds.cache.get(cfg.Server.GuildID).iconURL({dynamic:true}))
  Chat.setFooter(`Güncellenme: ${moment(Date.parse(new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" }))).locale("TR").format("LLL")}`)
  Chat.setDescription(`${msgList}` )
  LeaderBoard.edit(Chat)})}

}

module.exports.conf = {
  name: "ready",
};
