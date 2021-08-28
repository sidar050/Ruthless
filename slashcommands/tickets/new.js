const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, inter) => {

    if(db.get(`ticket_${inter.user.id}`) === true){
        return await inter.reply(`Je mag geen ticket aanmaken omdat je er al een open hebt!`)
    }

    const everyoneRole = inter.guild.roles.cache.find(x => x.name === "@everyone").id;
    inter.guild.channels.create(`ticket-${inter.user.username}`, { type: 'text',
    permissionOverwrites: [
        {
            id: everyoneRole,
            deny: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES]
        },
        {
            id: inter.user.id,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES]
        }
    ], }).then(async c => {

        const openEmbed = new Discord.MessageEmbed()
            .setDescription(`Je ticket is succesvol aangemaakt! ${c}`)
        await inter.reply({ embeds: [openEmbed] })

        const thanksEmbed = new Discord.MessageEmbed()
            .setDescription(`Bedankt voor het aanmakane van een ticket!\nOns team zal je zo snel mogelijk helpen!`)
        c.send({ content: `<@!${inter.user.id}>`, embeds: [thanksEmbed] })

        db.set(`ticket_${inter.user.id}`, true)
        db.set(`ticketChannel_${c.id}`, true)

    })

}

module.exports.help = {
    name: 'new'
}