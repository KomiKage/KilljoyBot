const { SlashCommandBuilder } = require('discord.js');
const {catKey} = require('../config.json');
const axios = require('axios').default;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('funy cat imag'),
	async execute(interaction) {
		axios.defaults.headers.common['x-api-key'] = catKey; // Replace this with your API Key

                    let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } ); // Ask for 1 Image, at full resolution
                    
                    this.image = response.data[0]; // the response is an Array, so just use the first item as the Image

        await interaction.reply(this.image.url);
	},
};

