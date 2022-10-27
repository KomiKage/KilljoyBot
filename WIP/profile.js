const { SlashCommandBuilder,AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const { request } = require('undici');

// Pass the entire Canvas object because you'll need access to its width and context
const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		context.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (context.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return context.font;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('I DO NOT WORK'),
	async execute(interaction) {
		// Create a 700x250 pixel canvas and get its context
		// The context will be used to modify the canvas
		const canvas = Canvas.createCanvas(700, 250);
		const context = canvas.getContext('2d');
        //const background = await Canvas.loadImage('../images/canvas.jpg')

        // This uses the canvas dimensions to stretch the image onto the entire canvas
        context.drawImage(canvas, 0, 0, canvas.width, canvas.height);

        // Using undici to make HTTP requests for better performance
	    const { body } = await request(interaction.user.displayAvatarURL({ extension: 'jpg' }));
	    const avatar = await Canvas.loadImage(await body.arrayBuffer());

        // Move the image downwards vertically and constrain its height to 200, so that it's square
	    context.drawImage(avatar, 25, 25, 200, 200);

        context.font = applyText(canvas, interaction.member.displayName);
        context.fillStyle = '#ffffff';
        context.fillText(interaction.member.displayName, canvas.width / 2.5, canvas.height / 2.5);

        context.font = '40px sans-serif';
        context.fillStyle = '#ffffff';
        context.fillText('Cummies : 0', canvas.width / 2.5, canvas.height / 1.5);
    
        // Use the helpful Attachment class structure to process the file for you
        const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });
    
        interaction.reply({ files: [attachment] });
	},
};