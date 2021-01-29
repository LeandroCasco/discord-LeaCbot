const Discord = require('discord.js');

const messageEmbed = () => {
    const msgEmbed = new Discord.MessageEmbed()
    .setColor('fff')
    .setTitle('Hola soy LeaC')
    .setDescription('Hola Mundo');
    
    return msgEmbed;
}

module.exports = messageEmbed;