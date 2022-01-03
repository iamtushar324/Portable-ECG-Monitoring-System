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
function getHeartRate(data) {
	let flag = false;
	let indexForTimeGaps = [];
	for (let i = 0; i < data.length; i++) {
		if (flag) {
			if (data[i] < 750) {
				flag = false;
			}
			continue;
		}
		if (data[i] > 750) {
			flag = true;
			indexForTimeGaps.push(i);
		}
	}
	console.log(indexForTimeGaps);
	let gapSum = 0;
	let gapCounts = 0;
	for (let i = 0; i < indexForTimeGaps.length - 1; i++) {
		gapCounts++;
		gapSum += indexForTimeGaps[i + 1] - indexForTimeGaps[i];
	}
	let averageGap = gapSum / gapCounts;

	return parseInt(60000 / averageGap);
}
module.exports = { sendAlertToTelegram, getHeartRate };
