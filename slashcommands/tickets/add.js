const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter) => {

    if(db.get(`ticketChannel_${inter.channelId}`) != true){
        return await inter.reply(`Dit commando kan je enkel in een ticket kanaal doen!`)
    }

    const string = inter.options.getMentionable('gebruiker-of-rol')

    inter.channel.permissionOverwrites.create(string, { VIEW_CHANNEL: true, SEND_MESSAGES: true })

    await inter.reply(`${string} is toegevoegd aan het kanaal!`)
    
}

module.exports.help = {
    name: 'add'
}