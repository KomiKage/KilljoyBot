const { stands } = require('../data/standList.js');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {

		if(interaction.isButton()){
			
			if (interaction.customId = 'standarrow'){
				var stand = stands[Math.floor(Math.random()*stands.length)];
				await interaction.reply("You have awakened the power of *" + (stand) + "*!");}	
		}
		
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};