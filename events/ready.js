const { ActivityType } = require('discord.js');
var fs = require("fs");
var date = new Date();

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        client.user.setActivity('a shit eating contest', { type: ActivityType.Competing });
		date.getDate();
		global.dateSTR = date.toDateString();
		console.log(`Ready! Logged in as ${client.user.tag}`);
		if(fs.existsSync(`C:/Users/Barusu/Desktop/KilljoyBot/chatLogs/${dateSTR}.txt`)){
			return;
		} else{var createStream = fs.createWriteStream(`C:/Users/Barusu/Desktop/KilljoyBot/chatLogs/${dateSTR}.txt`); createStream.end();}
	},
};