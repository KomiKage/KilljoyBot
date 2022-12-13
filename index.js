const { Client, codeBlock, Collection, GatewayIntentBits, AttachmentBuilder  } = require('discord.js');
const { token } = require('./config.json');
const { Op } = require('sequelize');
const fs = require('node:fs');
const path = require('node:path');
const Canvas = require('@napi-rs/canvas');
const { Users, CurrencyShop } = require('./dbObjects.js');
const stands = require('./data/stands.json');
const standsUsers = require('./data/standUsers.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds,
                                      GatewayIntentBits.GuildMessages,
                                      GatewayIntentBits.MessageContent,
                                      GatewayIntentBits.GuildMembers,
									  GatewayIntentBits.DirectMessages],
									  partials: [
										  'CHANNEL', // Required to receive DMs
									  ] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const currency = new Collection();

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

Reflect.defineProperty(currency, 'add', {
	value: async (id, amount) => {
		const user = currency.get(id);

		if (user) {
			user.balance += Number(amount);
			return user.save();
		}

		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);

		return newUser;
	},
});

Reflect.defineProperty(currency, 'getBalance', {
	value: id => {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});	

//client.on('interactionCreate', interaction => {
//	if (!interaction.isButton()) return;
//	if (interaction.customId =! 'redButton') return;
//	const user = interaction.options.getUser('target');
//	guild.members.ban(user);
//});

client.once('ready', async () => {
	const guild = client.guilds.cache.get("747774026482712578");
	const storedBalances = await Users.findAll();
	storedBalances.forEach(b => currency.set(b.user_id, b));
	const memberIds = guild.members.cache.map(member => member.id);

	//json stands testing
});

//=============================================================



client.login(token);