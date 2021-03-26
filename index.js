const Discord = require('discord.js')
const client = new Discord.Client()
const command = require('./helpers/commands')
const config = require('./config.json')

var token

if (config.mode == "dev") {
    const secrets = require('./secrets.json')
    token = secrets.token
} else {
    token = process.env.DJS_TOKEN
}

client.on('ready', () => {
    console.log('Client is ready')

    command(client, "ping", (message) => {
        message.channel.send("Pong!")
    })
})

client.login(token)