async function createCmd(client, guildId){
    const data = [

        // ping commando
        {
            name: 'ping',
            description: `Stuur een ping commando.`
        },
        {
            name: 'echo',
            description: 'Stuur wat ik zeg.',
            options: [{
                name: 'text',
                type: 'STRING',
                description: 'Voer de tekst in die wordt terug gestuurd.',
                required: true
            }]
        },
        {
            name: 'ban',
            description: 'Verban een gebruiker uit je guild.',
            options: [{
                name: 'gebruiker',
                description: 'Vermeld de gebruiker die je wilt verbannen!',
                type: 'USER',
                required: true
            }]
        },
        {
            name: 'kick',
            description: 'Kick een gebruiker uit je guild.',
            options: [{
                name: 'gebruiker',
                description: 'Vermeld de gebruiker die je wilt kicken!',
                type: 'USER',
                required: true
            }]
        },
        {
            name: 'new',
            description: 'Maak een nieuw ticket aan!'
        },
        {
            name: 'close',
            description: 'Sluit een ticket!'
        },
        {
            name: 'add',
            description: 'Voeg een gebruiker toe aan een ticket!',
            options: [{
                name: 'gebruiker-of-rol',
                type: 'MENTIONABLE',
                required: true,
                description: 'Vermeld de rol of gebruiker die je wilt toevoegen!'
            }]
        },
        {
            name: 'remove',
            description: 'Verwijder een gebruiker uit een ticket!',
            options: [{
                name: 'gebruiker-of-rol',
                type: 'MENTIONABLE',
                required: true,
                description: 'Vermeld de rol of gebruiker die je wilt verwijderen!'
            }]
        },
        {
            name: 'rename',
            description: 'Geef een ticket een andere naam!',
            options: [{
                name: 'nieuwe-naam',
                type: 'STRING',
                required: true,
                description: 'Voer de nieuwe naam in van het ticket.'
            }]
        }

    ]

    await client.guilds.cache.get(guildId)?.commands.set(data);

}

module.exports = { createCmd }