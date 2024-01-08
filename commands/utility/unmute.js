const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("unmute")
		.setDescription("Unmute user")
		.addUserOption(option => 
			option.setName("name")
				.setDescription("User name")
				.setRequired(true)
		),
		async execute(interaction) {
			const member = interaction.options.getMember('name')
			const role = interaction.guild.roles.cache.find(role => role.name === 'muted');			

			await member.roles.remove(role)
			interaction.reply({ content: `User ${member} unmuted`, ephemeral: true})
		}
}