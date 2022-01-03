const axios = require("axios");

async function sendAlertToTelegram(message) {
	// send msg to telegram bot
	let response = await axios.post(
		"https://api.telegram.org/bot" +
			process.env.TELEGRAM_BOT_TOKEN +
			"/sendMessage",
		{
			chat_id: process.env.TELEGRAM_CHAT_ID,
			text: message,
		}
	);

	return response.data.ok;
}
module.exports = { sendAlertToTelegram };
