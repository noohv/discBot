const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.MessageDelete,
	async execute(message) {
		const embed = new EmbedBuilder({
			title: `💬・Message deleted`,
			desc: `A message has been deleted`,
			fields: [
				{
					name: `> Author`,
					value: `- ${message.author} (${message.author.tag})`
				},
				{
					name: `> Date`,
					value: `- ${message.createdAt}`
				},
				{
					name: `> Channel`,
					value: `- ${message.channel} (${message.channel.name})`
				},
				{
					name: `> Message`,
					value: `\`\`\`${message.content.replace(/`/g, "'")}\`\`\``
				},
				{
					name: `> Timestamp`,
					value: `- <t:${Math.floor(message.createdTimestamp / 1000)}:R>`
				}
			]
		})

		message.channel.send({embeds: [embed]})

	}
}