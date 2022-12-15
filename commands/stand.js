const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder  } = require('discord.js');
const standUsers = require('../data/standUsers.json');
const stands = require('../data/stands.json');

let standName = '';
let id = 0;
let thumbnail = '';
let main = '';
let xp = '';
let lvl = '';

module.exports = {
	
	data: new SlashCommandBuilder()
		.setName('stand')
		.setDescription('Use your stand!'),
		
	async execute(interaction) {

		delete require.cache[require.resolve('../data/standUsers.json')];
		const standUsers = require('../data/standUsers.json');

		for (let i = 0; i < standUsers.length; i++) {
			if(standUsers[i].uid == interaction.user.id){
				id = (standUsers[i].id);
				xp = (standUsers[i].xp);
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
			.setTitle(`Your stand: **${standName}**\n Stand XP: ${xp}`)
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

