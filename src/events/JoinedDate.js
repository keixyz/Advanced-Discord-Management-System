const client = global.client;
const cfg = require("../configs/config.json");

module.exports = async () => {
  
  setInterval(() => {
  joined1Month()
  }, 3600000);
  function joined1Month() { 
  client.guilds.cache.get(cfg.Server.GuildID).members.cache.filter((member) =>  (Date.parse(new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" })) - member.joinedTimestamp) >= 2629800000).forEach((uye, index) => 
  setTimeout(() => {
  if(uye.roles.cache.has(cfg.Roles.Joined1Month) && uye.roles.cache.has(cfg.Roles.Joined2Month) && uye.roles.cache.has(cfg.Roles.Joined3Month) && uye.roles.cache.has(cfg.Roles.Joined6Month) && uye.roles.cache.has(cfg.Roles.Joined9Month) && uye.roles.cache.has(cfg.Roles.Joined12Month)) return
  uye.roles.add(cfg.Roles.Joined1Month)
  uye.roles.remove(cfg.Roles.Joined2Month)
  uye.roles.remove(cfg.Roles.Joined3Month)
  uye.roles.remove(cfg.Roles.Joined6Month)
  uye.roles.remove(cfg.Roles.Joined9Month)
  uye.roles.remove(cfg.Roles.Joined12Month)
  }, index*550))}
  
  setInterval(() => {
  joined2Month()
  }, 3600000);
  function joined2Month() { 
  client.guilds.cache.get(cfg.Server.GuildID).members.cache.filter((member) =>  (Date.parse(new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" })) - member.joinedTimestamp) >= 5259600000).forEach((uye, index) => 
  setTimeout(() => {
  if(uye.roles.cache.has(cfg.Roles.Joined1Month) && uye.roles.cache.has(cfg.Roles.Joined2Month) && uye.roles.cache.has(cfg.Roles.Joined3Month) && uye.roles.cache.has(cfg.Roles.Joined6Month) && uye.roles.cache.has(cfg.Roles.Joined9Month) && uye.roles.cache.has(cfg.Roles.Joined12Month)) return
  uye.roles.add(cfg.Roles.Joined2Month)
  uye.roles.remove(cfg.Roles.Joined1Month)
  uye.roles.remove(cfg.Roles.Joined3Month)
  uye.roles.remove(cfg.Roles.Joined6Month)
  uye.roles.remove(cfg.Roles.Joined9Month)
  uye.roles.remove(cfg.Roles.Joined12Month)
  }, index*550))}
  
  setInterval(() => {
  joined3Month()
  }, 3600000);
  function joined3Month() { 
  client.guilds.cache.get(cfg.Server.GuildID).members.cache.filter((member) =>  (Date.parse(new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" })) - member.joinedTimestamp) >= 7889400000).forEach((uye, index) => 
  setTimeout(() => {
  if(uye.roles.cache.has(cfg.Roles.Joined1Month) && uye.roles.cache.has(cfg.Roles.Joined2Month) && uye.roles.cache.has(cfg.Roles.Joined3Month) && uye.roles.cache.has(cfg.Roles.Joined6Month) && uye.roles.cache.has(cfg.Roles.Joined9Month) && uye.roles.cache.has(cfg.Roles.Joined12Month)) return
  uye.roles.add(cfg.Roles.Joined3Month)
  uye.roles.remove(cfg.Roles.Joined1Month)
  uye.roles.remove(cfg.Roles.Joined2Month)
  uye.roles.remove(cfg.Roles.Joined6Month)
  uye.roles.remove(cfg.Roles.Joined9Month)
  uye.roles.remove(cfg.Roles.Joined12Month)
  }, index*550))}
  
  setInterval(() => {
  joined6Month()
  }, 3600000);
  function joined6Month() { 
  client.guilds.cache.get(cfg.Server.GuildID).members.cache.filter((member) =>  (Date.parse(new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" })) - member.joinedTimestamp) >= 15778800000).forEach((uye, index) => 
  setTimeout(() => {
  if(uye.roles.cache.has(cfg.Roles.Joined1Month) && uye.roles.cache.has(cfg.Roles.Joined2Month) && uye.roles.cache.has(cfg.Roles.Joined3Month) && uye.roles.cache.has(cfg.Roles.Joined6Month) && uye.roles.cache.has(cfg.Roles.Joined9Month) && uye.roles.cache.has(cfg.Roles.Joined12Month)) return
  uye.roles.add(cfg.Roles.Joined6Month)
  uye.roles.remove(cfg.Roles.Joined1Month)
  uye.roles.remove(cfg.Roles.Joined2Month)
  uye.roles.remove(cfg.Roles.Joined3Month)
  uye.roles.remove(cfg.Roles.Joined9Month)
  uye.roles.remove(cfg.Roles.Joined12Month)
  }, index*550))}
  
  setInterval(() => {
  joined9Month()
  }, 3600000);
  function joined9Month() { 
  client.guilds.cache.get(cfg.Server.GuildID).members.cache.filter((member) =>  (Date.parse(new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" })) - member.joinedTimestamp) >= 23668200000).forEach((uye, index) => 
  setTimeout(() => {
  if(uye.roles.cache.has(cfg.Roles.Joined1Month) && uye.roles.cache.has(cfg.Roles.Joined2Month) && uye.roles.cache.has(cfg.Roles.Joined3Month) && uye.roles.cache.has(cfg.Roles.Joined6Month) && uye.roles.cache.has(cfg.Roles.Joined9Month) && uye.roles.cache.has(cfg.Roles.Joined12Month)) return
  uye.roles.add(cfg.Roles.Joined9Month)
  uye.roles.remove(cfg.Roles.Joined1Month)
  uye.roles.remove(cfg.Roles.Joined2Month)
  uye.roles.remove(cfg.Roles.Joined3Month)
  uye.roles.remove(cfg.Roles.Joined6Month)
  uye.roles.remove(cfg.Roles.Joined12Month)
  }, index*550))}
  
  setInterval(() => {
  joined12Month()
  }, 3600000);
  function joined12Month() { 
  client.guilds.cache.get(cfg.Server.GuildID).members.cache.filter((member) =>  (Date.parse(new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" })) - member.joinedTimestamp) >= 31557600000).forEach((uye, index) => 
  setTimeout(() => {
  if(uye.roles.cache.has(cfg.Roles.Joined1Month) && uye.roles.cache.has(cfg.Roles.Joined2Month) && uye.roles.cache.has(cfg.Roles.Joined3Month) && uye.roles.cache.has(cfg.Roles.Joined6Month) && uye.roles.cache.has(cfg.Roles.Joined9Month) && uye.roles.cache.has(cfg.Roles.Joined12Month)) return
  uye.roles.add(cfg.Roles.Joined12Month)
  uye.roles.remove(cfg.Roles.Joined1Month)
  uye.roles.remove(cfg.Roles.Joined2Month)
  uye.roles.remove(cfg.Roles.Joined3Month)
  uye.roles.remove(cfg.Roles.Joined6Month)
  uye.roles.remove(cfg.Roles.Joined9Month)
  }, index*550))}

}

module.exports.conf = {
  name: "ready",
};
