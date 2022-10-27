const stands = require('../data/standList.js');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {

		if(interaction.isButton()){
			
			if (interaction.customId = 'standarrow'){
				var stand = stands[0];
				console.log(stands);
				console.log(stands[0]);
				console.log(stand);
				await interaction.reply("You have awakened the power of *" + (stand) + "*!");}	
		}
		
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};