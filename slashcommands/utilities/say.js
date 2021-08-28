const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    if(!inter.member.permissions.has("ADMINISTRATOR")){
        return await inter.reply({ content: 'Jij hebt hier geen permissies voor!' })
    }
    
    const text = inter.options.getString('text');
    const channel = inter.options.getChannel('kanaal');

    const sayEmbed = new Discord.MessageEmbed()
        .setDescription(text)
        .setColor('FF2441')
        .setAuthor(inter.user.username, inter.user.displayAvatarURL())
        .setFooter(`2021 - Tutorial Bot`)

    channel.send({ embeds: [sayEmbed] })
    return await inter.reply({ content: `Het bericht is succesvol verzonden!`, ephemeral: true})

}

module.exports.help = {
    name: 'say'
}