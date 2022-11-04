const { Message } = require('discord.js');
const { stands } = require('../data/standList.js');
const fs = require('fs')

const fp = 'C:/Users/Barusu/Desktop/KilljoyBot/data/standUsers.json' // gotta fix file path
const contents = fs.readFileSync(fp, 'utf-8');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {

		if(interaction.isButton()){
			
			if (interaction.customId = 'standarrow' & !contents.includes(interaction.user.id)){
				var stand = stands[Math.floor(Math.random()*stands.length)];
				await interaction.reply("You have awakened the power of *" + (stand) + "*!");}	
				let data = {
					uid: (interaction.user.id),
					stand: (stand)
				}
				const stat = await fs.promises.stat(fp);
  				const fileSize = stat.size;

  				await fs.promises.truncate(fp, fileSize - 1);
				fs.appendFileSync(fp, "," + JSON.stringify(data) + "]");
		}
		
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};