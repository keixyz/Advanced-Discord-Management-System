module.exports = {
  conf: {
    aliases: [],
    name: "yönetimeval",
    owner: true,
    usage: 'yönetimeval [kod]',
    description: 'Kod denemek için olan komut.',
  },
  
  run: async ({client, msg, args}) => {
    
  if (!args[0]) return;
  let code = args.join(" ");
  function clean(text) {
  if (typeof text !== 'string') text = require('util').inspect(text, { depth: 0 })
  text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
  return text;};
  try {var evaled = clean(await eval(code));
  if(evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace("token", "Yasaklı komut").replace(client.token, "Yasaklı komut");
  msg.channel.send(`${evaled.replace(client.token, "Yasaklı komut")}`, {code: "js", split: true});} catch(err) { msg.channel.send(err, {code: "js", split: true}) };}}