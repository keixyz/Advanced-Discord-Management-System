const client = global.client;
const cfg = require("../configs/config.json");
const StatDatabase = require("../schemas/Stat");

module.exports = async (msg) => {
  
  StatDatabase.findOne({ SunucuID: msg.guild.id, userID: msg.author.id}, async (err, res) => {
  if (!res) return 
  if(msg.member.user.bot) return
  let MessageData = (res.MessageNumber) || 0
  if(MessageData === 50000) {
  if(msg.member.roles.cache.has(cfg.Roles.ChatGold)) return
  client.channels.cache.get(cfg.Channels.rankUp).send(`🎉 ${msg.author} tebrikler! Mesaj istatistiklerin bir sonraki seviyeye atlaman için yeterli oldu. **"Chat: Altın"** rolüne terfi edildin!`)
  msg.member.roles.add(cfg.Roles.ChatGold)
  msg.member.roles.remove(cfg.Roles.ChatSilver)
  msg.member.roles.remove(cfg.Roles.ChatBronze)
  msg.member.roles.remove(cfg.Roles.ChatDiamond)
  }
    
  if(MessageData === 1000) {
  if(msg.member.roles.cache.has(cfg.Roles.ChatBronze)) return
  client.channels.cache.get(cfg.Channels.rankUp).send(`🎉 ${msg.author} tebrikler! Mesaj istatistiklerin bir sonraki seviyeye atlaman için yeterli oldu. **"Chat: Bronz"** rolüne terfi edildin!`)
  msg.member.roles.add(cfg.Roles.ChatBronze)
  msg.member.roles.remove(cfg.Roles.ChatSilver)
  msg.member.roles.remove(cfg.Roles.ChatGold)
  msg.member.roles.remove(cfg.Roles.ChatDiamond)
  } 
    
  if(MessageData === 100000) {
  if(msg.member.roles.cache.has(cfg.Roles.ChatDiamond)) return
  client.channels.cache.get(cfg.Channels.rankUp).send(`🎉 ${msg.author} tebrikler! Mesaj istatistiklerin bir sonraki seviyeye atlaman için yeterli oldu. **"Chat: Elmas"** rolüne terfi edildin!`)
  msg.member.roles.add(cfg.Roles.ChatDiamond)
  msg.member.roles.remove(cfg.Roles.ChatSilver)
  msg.member.roles.remove(cfg.Roles.ChatGold)
  msg.member.roles.remove(cfg.Roles.ChatBronze)
  } 
    
  if(MessageData === 5000) {
  if(msg.member.roles.cache.has(cfg.Roles.ChatSilver)) return
  client.channels.cache.get(cfg.Channels.rankUp).send(`🎉 ${msg.author} tebrikler! Mesaj istatistiklerin bir sonraki seviyeye atlaman için yeterli oldu. **"Chat: Gümüş"** rolüne terfi edildin!`)
  msg.member.roles.add(cfg.Roles.ChatSilver)
  msg.member.roles.remove(cfg.Roles.ChatDiamond)
  msg.member.roles.remove(cfg.Roles.ChatGold)
  msg.member.roles.remove(cfg.Roles.ChatBronze)
  }})
  
}

module.exports.conf = {
  name: "message"
};
