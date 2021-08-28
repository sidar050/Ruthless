const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    if(!inter.member.permissions.has("KICK_MEMBER")){
        return await inter.reply({ content: `Jij hebt hier geen permissies voor!` })
    }

    const user = inter.options.getUser('gebruiker');

    setTimeout(() => {inter.guild.members.kick(user.id).catch(() => {})}, 1000)

    return await inter.reply(`${user} is succesvol gekickt!`)

}

module.exports.help = {
    name: 'kick'
}