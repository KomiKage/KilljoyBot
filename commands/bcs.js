const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bcs')
		.setDescription('Replies with a link to pirate better call saul!'),
	async execute(interaction) {
        const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setURL('https://fmovies.to/series/better-call-saul-82zxv/1-1')
					.setLabel('The constitution says you do!')
					.setStyle(ButtonStyle.Link))

		await interaction.reply({ content: 'Did you know that you have rights?', components: [row] });
	},
};