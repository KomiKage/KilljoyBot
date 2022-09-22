module.exports={
    name: 'messageCreate',
	execute(message){

        console.log(`${message.member.displayName} : ${message} | ${message.channel.name} | ${message.createdAt}`);
        
        /*if(message.author != 973553585210142721){
            message.reply('awooooo')
        
        .then(() => console.log(`Replied to message "${message.content}"`))
        .catch(console.error);
        }*/

        }
};