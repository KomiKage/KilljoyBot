const { SlashCommandBuilder, User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vibecheck')
		.setDescription('Vibechecks a user')
        .addUserOption(option => option.setName('target').setDescription('The user').setRequired(true)),

	async execute(interaction) {
        const target = interaction.options.getUser('target');
        const channel = interaction.channel;

        var cunt = 0;

        channel.messages.fetch({limit: 100})

        .then(messages => {
          messages.forEach(message => {
            console.log(`${message.author.username}: ${message.content}`);
            cunt = cunt +1;
            console.log(cunt);
          });
        })
        
        .catch(console.error);

		await interaction.reply(`${channel}`);
        
	},
};