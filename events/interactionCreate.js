const { Message, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder  } = require('discord.js');
//const { stands } = require('../data/standList.js');
const stands = require('../data/stands.json');
const fs = require('fs')

//requiring the correct filepath should fix the direct path issue (:

const fp = 'C:/Users/Barusu/Desktop/KilljoyBot/data/standUsers.json'; // gotta fix file path

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {

		if(interaction.isButton()){

			const contents = fs.readFileSync(fp, 'utf-8');
			if (interaction.customId = 'standarrow' && !contents.includes(interaction.user.id)){

				console.log(contents.includes(interaction.user.id));
				var stand = stands[Math.floor(Math.random()*stands.length)];

				const embed = new EmbedBuilder()
				.setColor(0xFFE100)
				.setTitle("You have awakened the power of ***" + (stand.name) + "***!")
				.setImage(stand.thumbnail)

				await interaction.reply({ content: '', ephemeral: false, embeds: [embed]} );
				//await interaction.reply("You have awakened the power of ***" + (stand.name) + "***!");
				
				let data = {
					uid: (interaction.user.id),
					id: (stand.id),
					xp: 0
				}
				const stat = await fs.promises.stat(fp);
  				const fileSize = stat.size;

  				await fs.promises.truncate(fp, fileSize - 1);
				fs.appendFileSync(fp, "," + JSON.stringify(data) + "]");
			}

			//stand main abilities

			if(interaction.customId = 'plunder' && !contents.includes(interaction.user.id)){

			}
		}
		
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};
