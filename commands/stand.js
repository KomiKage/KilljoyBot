const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder  } = require('discord.js');
const standUsers = require('../data/standUsers.json');
const stands = require('../data/stands.json');

let standName = '';
let id = 0;
let thumbnail = '';
let main = '';

module.exports = {
	
	data: new SlashCommandBuilder()
		.setName('stand')
		.setDescription('Use your stand!'),
		
	async execute(interaction) {

		for (let i = 0; i < standUsers.length; i++) {
			if(standUsers[i].uid == interaction.user.id){
				id = (standUsers[i].id);
			}
		for (let i = 0; i < stands.length; i++){
			if(stands[i].id == id){
				standName = (stands[i].name);
				thumbnail = (stands[i].thumbnail);
				main = (stands[i].main);
			}
		}

		  }

		const embed = new EmbedBuilder()
			.setColor(0xFFE100)
			.setTitle(`Your stand: **${standName}**`)
			.setImage(thumbnail)

		const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
                .setCustomId('standMain')
				.setLabel(main)
				.setStyle(ButtonStyle.Primary))

		//await interaction.reply({ content: '', ephemeral: false, embeds: [embed], components: [row] } );};
		await interaction.reply({content:'', ephmeral: false, embeds: [embed], components: [row]});
	},
};

