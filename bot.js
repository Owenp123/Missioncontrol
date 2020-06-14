const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzE3NzEyODc0NDc0MzA3Njk3.XuXsgA.BS1LVznInonGkvi0xkuMNvjP9Fc)
