const Discord = require('discord.js')
const client = new Discord.Client()
//const secrets = require('./secrets.json')

client.on('ready', () => {
    console.log('Client is ready')

})

client.login(process.env.DJS_TOKEN)