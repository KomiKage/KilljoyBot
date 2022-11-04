const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder  } = require('discord.js');
const stands = require('../data/standList.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getstand')
		.setDescription('Get stand!'),

	async execute(interaction) {
		const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('standarrow')
				.setLabel('use arrow')
				.setStyle(ButtonStyle.Primary),
		);

		const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('A wild stand arrow appears!')
			.setImage('https://i.imgur.com/guDQKim.jpg')

	await interaction.reply({ content: '', ephemeral: true, embeds: [embed], components: [row] } );},
	
};
