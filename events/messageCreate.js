const fs = require('fs');
const standUsers = require('../data/standUsers.json');
const path = 'C:/Users/Barusu/Desktop/KilljoyBot/data/standUsers.json';
//USING DIRECT FILE PATH = NOT GOOD

module.exports={
    name: 'messageCreate',
	execute(message){

        var content = `${message.member.displayName} : ${message} | ${message.channel.name} | ${message.createdAt}`;

        console.log(content);
        delete require.cache[require.resolve('../data/standUsers.json')];
		    const standUsers = require('../data/standUsers.json');
        
        fs.appendFile(`C:/Users/Barusu/Desktop/KilljoyBot/chatLogs/${dateSTR}.txt`, content + '\n', err => {
            if (err) {
              console.error(err);
            }
          });

          for(let i = 0; i < standUsers.length; i++){
            if(standUsers[i].uid == message.author){
              console.log(message.author.id);
              let cnt = JSON.parse(fs.readFileSync(path, 'utf8'));
              var addInt = parseInt(cnt[i].xp) + 1;
              var add = addInt.toString();
              cnt[i].xp = add;
              fs.writeFileSync(path, JSON.stringify(cnt));
              delete require.cache[require.resolve('../data/standUsers.json')];
		          const standUsers = require('../data/standUsers.json');
            }
          }
          
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