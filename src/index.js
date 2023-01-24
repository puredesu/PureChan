import { Client, GatewayIntentBits } from 'discord.js';
import fs from 'fs';
import dotenv from 'dotenv';
import config from '../config.json' assert { type: 'json' };

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
})

// Use .env to login when available
if (fs.existsSync('./.env')) {
    dotenv.config();
    client.login(process.env.TOKEN);
} else {
    client.login(config.TOKEN);
}

client.on('ready', ()=> {
    console.log(`${client.user.tag} has logged in!`);
});