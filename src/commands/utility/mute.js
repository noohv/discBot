const { SlashCommandBuilder } = require('discord.js');
const ms = require('ms');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("mute")
		.setDescription("Mute user")
		.addUserOption(option => 
			option.setName("name")
				.setDescription("User name")
				.setRequired(true)
		)
		.addStringOption(option =>
			option.setName('duration')
			.setDescription("Specify duration")
			.setRequired(false)
		),
		async execute(interaction) {
			const member = interaction.options.getMember('name')
			const role = interaction.guild.roles.cache.find(role => role.name === 'muted');			
			const muteTime = interaction.options.getString('duration')

			await member.roles.add(role)
			
			if(muteTime) {
				if(ms(muteTime) > 0) {
					interaction.reply({ content: `User ${member} muted for ${muteTime}`, ephemeral: true})
					setTimeout(()=> {
						member.roles.remove(role)
					}, ms(muteTime))
				}
			}
			else {
				interaction.reply({ content: `User ${member} muted`, ephemeral: true})
			}
		}
}