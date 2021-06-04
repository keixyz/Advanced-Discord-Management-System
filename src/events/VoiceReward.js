const client = global.client;
const cfg = require("../configs/config.json");
const StatDatabase = require("../schemas/Stat");

module.exports = async () => {
  
  setInterval(() => {
  VoiceReward()
  }, 3600000);
  function VoiceReward() {  
  client.guilds.cache.get(cfg.Server.GuildID).channels.cache.filter(e => e.type == "voice" && e.members.size > 0).forEach(channel => {
  channel.members.filter(member => !member.user.bot).forEach(member => { 
  StatDatabase.findOne({ SunucuID: cfg.Server.GuildID, userID: member.user.id}, async (err, res) => {
  if (!res) return 
  let VoiceData = client.convertDuration2((res.VoiceNumber) || 0)
  
  if(VoiceData >= 2700000000) {
  if(member.roles.cache.has(cfg.Roles.VoiceGold) && member.roles.cache.has(cfg.Roles.VoiceBronze) && member.roles.cache.has(cfg.Roles.VoiceSilver) && member.roles.cache.has(cfg.Roles.VoiceDiamond)) return   
  client.channels.cache.get(cfg.Channels.rankUp).send(`🎉 ${member} tebrikler! Ses istatistiklerin bir sonraki seviyeye atlaman için yeterli oldu. **"Voice: Altın"** rolüne terfi edildin!`)
  member.roles.add(cfg.Roles.VoiceGold)
  member.roles.remove(cfg.Roles.VoiceBronze)
  member.roles.remove(cfg.Roles.VoiceSilver)
  member.roles.remove(cfg.Roles.VoiceDiamond)
  }
    
  if(VoiceData >= 360000000) {
  if(member.roles.cache.has(cfg.Roles.VoiceGold) && member.roles.cache.has(cfg.Roles.VoiceBronze) && member.roles.cache.has(cfg.Roles.VoiceSilver) && member.roles.cache.has(cfg.Roles.VoiceDiamond)) return   
  client.channels.cache.get(cfg.Channels.rankUp).send(`🎉 ${member} tebrikler! Ses istatistiklerin bir sonraki seviyeye atlaman için yeterli oldu. **"Voice: Bronz"** rolüne terfi edildin!`)
  member.roles.add(cfg.Roles.VoiceBronze)
  member.roles.remove(cfg.Roles.VoiceGold)
  member.roles.remove(cfg.Roles.VoiceSilver)
  member.roles.remove(cfg.Roles.VoiceDiamond)
  }
    
  if(VoiceData >= 7200000000) {
  if(member.roles.cache.has(cfg.Roles.VoiceGold) && member.roles.cache.has(cfg.Roles.VoiceBronze) && member.roles.cache.has(cfg.Roles.VoiceSilver) && member.roles.cache.has(cfg.Roles.VoiceDiamond)) return   
  client.channels.cache.get(cfg.Channels.rankUp).send(`🎉 ${member} tebrikler! Ses istatistiklerin bir sonraki seviyeye atlaman için yeterli oldu. **"Voice: Elmas"** rolüne terfi edildin!`)
  member.roles.add(cfg.Roles.VoiceDiamond)
  member.roles.remove(cfg.Roles.VoiceGold)
  member.roles.remove(cfg.Roles.VoiceSilver)
  member.roles.remove(cfg.Roles.VoiceBronze)
  }

  if(VoiceData >= 1080000000) {
  if(member.roles.cache.has(cfg.Roles.VoiceGold) && member.roles.cache.has(cfg.Roles.VoiceBronze) && member.roles.cache.has(cfg.Roles.VoiceSilver) && member.roles.cache.has(cfg.Roles.VoiceDiamond)) return   
  client.channels.cache.get(cfg.Channels.rankUp).send(`🎉 ${member} tebrikler! Ses istatistiklerin bir sonraki seviyeye atlaman için yeterli oldu. **"Voice: Gümüş"** rolüne terfi edildin!`)
  member.roles.add(cfg.Roles.VoiceSilver)
  member.roles.remove(cfg.Roles.VoiceGold)
  member.roles.remove(cfg.Roles.VoiceDiamond)
  member.roles.remove(cfg.Roles.VoiceBronze)
  }})})})}
  
}

module.exports.conf = {
  name: "ready",
};