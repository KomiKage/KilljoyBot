const fs = require('fs');

module.exports={
    name: 'messageCreate',
	execute(message){

        var content = `${message.member.displayName} : ${message} | ${message.channel.name} | ${message.createdAt}`;

        console.log(content);
        
        fs.appendFile(`C:/Users/Barusu/Desktop/KilljoyBot/chatLogs/${dateSTR}.txt`, content + '\n', err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });

        /*if(message.author != 973553585210142721){
            message.reply('awooooo')
        
        .then(() => console.log(`Replied to message "${message.content}"`))
        .catch(console.error);
        }*/

        }
};