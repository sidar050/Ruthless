const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    if(!inter.member.permissions.has("ADMINISTRATOR")){
        return await inter.reply({ content: 'Jij hebt hier geen permissies voor!' })
    }

    const text = inter.options.getString('text');
    return await inter.reply({ content: text })

}

module.exports.help = {
    name: 'echo'
}