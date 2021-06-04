module.exports = (client, cfg, moment, parsems) => {

   client.Renkler = new Array("#6959cd","#1f0524", "#0b0067", "#4a0038", "#07052a", "#FFDF00", "#00FFFF", "#0091CC", "#0047AB", "#384B77", "#ffffff", "#000000", "#04031a", "#f9ffba");

   client.normalEmbed = (message, msj) => {
     return {
       embed: {
         description: message,
         author: { name: msj.guild.member(msj.author).displayName, icon_url: msj.author.avatarURL({dynamic: true}) },
         color: client.Renkler[Math.floor(Math.random() * client.Renkler.length)],}}}
  
  client.yetersizYetki = (message, msj) => {
    return {
     embed: {
      description: `Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`,
      author: { name: msj.guild.member(msj.author).displayName, icon_url: msj.author.avatarURL({dynamic: true}) },
      color: client.Renkler[Math.floor(Math.random() * client.Renkler.length)],}}};
  
  client.timemessage = (content, Channel, timeout) => {
   const channel = client.channels.cache.get(Channel);
   if (channel) channel.send(content).then((msg) => msg.delete({ timeout: timeout })).catch(() => { });};
  
  client.message = (content, Channel) => {
   const channel = client.channels.cache.get(Channel);
   if (channel) channel.send(content).catch(() => { });};
  
  client.format = sure => {
   return moment.duration(sure).format("D [gün,] H [saat,] m [dakika,] s [saniye.]");};
  
  client.toDate = date => {
   return moment(date).format("DD MM YYYY HH:mm");};
  
  client.getDate = (date, type) => {
   let sure;
   date = Number(date);
   if (type === "saniye") { sure = (date * 1000) }
   else if (type === "dakika") { sure = (60 * 1000) * date }
   else if (type === "saat") { sure = ((60 * 1000) * 60) * date }
   else if (type === "gün") { sure = (((60 * 1000) * 60) * 24) * date }
   else if (type === "hafta") { sure = ((((60 * 1000) * 60) * 24) * 7) * date }
   else if (type === "ay") { sure = ((((60 * 1000) * 60) * 24) * 30) * date }
   else if (type === "yıl") { sure = ((((((60 * 1000) * 60) * 24) * 30) * 12) + 5) * date };
   return sure;};
  
  client.parseTime = time => {
    var x = "";
    var y = parsems(time);
    if (y.days !== 0) {
      x = `${y.days} gün ${y.hours} saat ${y.minutes} dk.`;
    } else if (y.hours !== 0) {
      x = `${y.hours} saat ${y.minutes} dk.`;
    } else if (y.minutes !== 0) {
      x = `${y.minutes} dk.`;
    } else x = `0 dk.`;
    return x;
  };
  
  client.react = (msg, Tür) => {
   if (Tür == "tick") return msg.react(cfg.Emoji.TickEmoji)
   if (Tür == "red") return msg.react(cfg.Emoji.RedEmoji)}}
