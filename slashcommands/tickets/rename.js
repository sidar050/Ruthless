const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter) => {

    if(db.get(`ticketChannel_${inter.channelId}`) != true){
        return await inter.reply(`Dit commando kan je enkel in een ticket kanaal doen!`)
    }

    const naam = inter.options.getString('nieuwe-naam');

    inter.channel.setName(`ticket-${naam}`)

    return await inter.reply(`Deze ticket heeft een nieuwe naam ontvangen! (ticket-${naam})`)
    
}

module.exports.help = {
    name: 'rename'
}