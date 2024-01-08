const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("mute")
		.setDescription("Mute user")
		.addUserOption(option => 
				option.setName("name")
					.setDescription("User name")
					.setRequired(true)
		),
		async execute(interaction) {
			const user = interaction.options.getUser('name')
			const member = await interaction.guild.members.fetch(user)
			const role = interaction.guild.roles.cache.find(role => role.name === 'muted');			
			await member.roles.add(role)
			interaction.reply(`User muted`)
		}
}