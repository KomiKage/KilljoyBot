const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios').default;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deviate')
		.setDescription('Currently doesn\'t Work.')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('the search query')
                .setRequired(true)),
	async execute(interaction) {
                    let response = await axios.get(`https://backend.deviantart.com/rss.xml?type=deviation&q=boost%3Apopular+in%3Adigitalart%2Fdrawings+${"input"}`);
                    this.image = response.data[0]; // the response is an Array, so just use the first item as the Image

        await interaction.reply(this);
	}
};

