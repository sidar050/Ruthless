const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter) => {

    if(db.get(`ticketChannel_${inter.channelId}`) != true){
        return await inter.reply(`Dit commando kan je enkel in een ticket kanaal doen!`)
    }

    const string = inter.options.getMentionable('gebruiker-of-rol')

    inter.channel.permissionOverwrites.create(string, { VIEW_CHANNEL: false, SEND_MESSAGES: false })

    await inter.reply(`${string} is verwijderd uit het kanaal!`)
    
}

module.exports.help = {
    name: 'remove'
}