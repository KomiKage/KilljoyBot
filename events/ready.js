const { ActivityType } = require('discord.js');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        client.user.setActivity('a shit eating contest', { type: ActivityType.Competing });
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};