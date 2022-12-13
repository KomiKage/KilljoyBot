const { SlashCommandBuilder } = require('discord.js');
const standUsers = require('../data/standUsers.json');

let standName = '';

module.exports = {
	
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
		
	async execute(interaction) {

		for (let i = 0; i < standUsers.length; i++) {
			if(standUsers[i].uid == interaction.user.id){
				standName = (standUsers[i].standName);
			}
		  }

		await interaction.reply(`Your tag:** ${interaction.user.tag}**\nYour stand: **${standName}**`);
	},
};

