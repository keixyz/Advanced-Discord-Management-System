const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const cfg = require("./src/configs/config.json");
const moment = require("moment");
const mongo = require("mongoose");
const parsems = require("parse-ms");
require("moment-duration-format")

client.commands = global.commands = new Collection();
client.aliases = new Collection();

require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/events/functions.js")(client, cfg, moment, parsems); 

client.login(cfg.Bot.Token).catch(() => console.error("Bota giriş yapılırken başarısız olundu!"));