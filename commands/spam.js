const { SlashCommandBuilder, User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spam')
		.setDescription('spam a user')
        .addUserOption(option => option.setName('target').setDescription('The user').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('the message').setRequired(true))
        .addIntegerOption(option => option.setName('amount').setDescription('amount of @s').setRequired(true)),

	async execute(interaction) {
        const target = interaction.options.getUser('target');
        const amount = interaction.options.getInteger('amount');
        const message = interaction.options.getString('message');
        
		await interaction.reply(`${target} ${message}`);
        
        for(let i = 1; i < amount; i++){
            await interaction.followUp(`${target} ${message}`);
        }
	},
};