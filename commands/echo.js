const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Make me say something!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The words I must speak.')
                .setRequired(true)),
	async execute(interaction) {
		const input = interaction.options.getString("input")
        await interaction.reply(input)
	},
};

