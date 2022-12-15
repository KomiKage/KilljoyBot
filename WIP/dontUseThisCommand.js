const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shinyredbutton')
		.setDescription('Whatever you do, DON\'T press the shiny red button.'),
	async execute(interaction) {
        const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
                    .setCustomId('redButton')
					.setLabel('OoOo, I\m a shiny red button, you should press me oOoO.')
					.setStyle(ButtonStyle.Danger))

		await interaction.reply({ content: 'hatever you do, DON\'T press the shiny red button. Do NOT believe it\s oh so sweet and delicious lies.', components: [row] });
	},
};