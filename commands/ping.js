import { SlashCommandBuilder } from 'discord.js';

module.exports= {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Poing!'),
    async execute(interation) {
        await interation.reply('Poing!');
    },
};