const { SlashCommandBuilder } = require('discord.js');
const { Users, CurrencyShop } = require('../dbObjects.js');
const {currency, getBalance} = require('../index')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('balance')
		.setDescription('Yer balance.'),
	async execute(interaction) {
        
		const target = interaction.options.getUser('user') ?? interaction.user;

		return interaction.reply(`${target.tag} has ${currency.getBalance(target.id)}💰`);
	},
};