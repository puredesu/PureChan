import { Client, Collection, Events, GatewayIntentBits, Routes } from 'discord.js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import config from './config.json' assert { type: 'json' };

let TOKEN;
// Use .env to login when available
if (fs.existsSync('./.env')) {
    dotenv.config();
    TOKEN = process.env.TOKEN;
} else {
    TOKEN = config.TOKEN;
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent    
    ],
});

client.commands = new Collection();

client.login(TOKEN);

client.once(Events.ClientReady, c => {
    console.log(`${c.user.tag} has logged in!`);
});