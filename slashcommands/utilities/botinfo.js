const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    const embed = new Discord.MessageEmbed()
        .setDescription(`Onderstaand informatie over je bot!`)
        .addField(`Bot Naam:`, client.user.username, true)
        .addField(`Bot Disriminator:`, `#${client.user.discriminator}`, true)
        .addField(`Bot ID:`, client.user.id, true)
        .setColor('FF2441')

    await inter.reply({ embeds: [embed] })

}

module.exports.help = {
    name: 'botinfo'
}