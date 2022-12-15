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
          });

        let rnd = Math.floor(Math.random() * 101);
        if(rnd > 99 && message.author != 973553585210142721){
          fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
            .then(Response => { return Response.json()})
            .then(reply => {message.reply(reply.insult)})

        .then(() => console.log(`Replied to message "${message.content}"`))
        .catch(console.error);
        }

        }
        
};