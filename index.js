const { Client, Collection, Events, GatewayIntentBits, REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const config = require('./config.json');

let TOKEN;
let CLIENT_ID;
let GUILD_ID;
// Use .env to login when available
if (fs.existsSync('./.env')) {
    dotenv.config();
    TOKEN = process.env.TOKEN;
    CLIENT_ID = process.env.CLIENT_ID
    GUILD_ID = process.env.GUILD_ID
} else {
    TOKEN = config.TOKEN;
    CLIENT_ID = config.CLIENT_ID;
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.once(Events.ClientReady, c => console.log(`${c.user.tag} has logged in!`));

client.login(TOKEN);
