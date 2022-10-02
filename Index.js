const { Client, GatewayIntentBits } = require("discord.js")
const client = new Client({
  intents : [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
})

/* I don't recommend using and creating this constant
If your using replit and not visual studio or any other
IDE that's installed in your device */
const { token } = require("./config.json")

client.on("ready", () => {
  console.log(`Client logged in as ${client.user.tag}`)
  client.user.setActivity(`with ${client.guilds.cache.size}`)
})

client.login(token)
