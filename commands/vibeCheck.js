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
        var lastId = 0;
        var options = { limit: 100};
        var size = 100;

        if(size === 100){
          channel.messages.fetch(options)

          .then(messages => {
            if (lastId !== undefined) {
              options.before = lastId;
            }
            const filteredMessages = messages.filter(message => message.author.id === target.id);
            filteredMessages.forEach(message => {
              console.log(`${message.author.username}: ${message.content}`);
              var lastId = message.id;
              cunt = cunt +1;
              console.log(cunt);
              console.log(lastId);
              
            });
            console.log("|-|-|-|-|-|");
            size = messages.size;
            const gay = size;
        })
        }

		await interaction.reply({ content: target.username + ' is a faggot~!', ephemeral: false });
        
	},
};