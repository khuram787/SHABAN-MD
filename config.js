const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || '' '' "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09tdFJ5MmtzZEVGTFViWnc4ZDk5NDBIc3QzTSs4QzRnMGVOVWlQMkwxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3gyYUdINGdrOStOQzlrVC80MG1JNG9SYzlzNFh1N1o3SHp0cVE0cGRIUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSTdTWGoxYkxObDlpUXBXeHhIQkthNHJzSXRXc1JJYkJnZG5kb2s2KzNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmMjZzWWd6NmlOcVhLSXZUYS9oSjlaVlZqdGk2SlEwOERLQ0hvS2lXWEVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEUnE1TjY1a3pkN0E1dzE4TW5HdER4YTNlZmNtbDN3cndzN1I0bnN4a1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYrZ1NZc29TZk8yV0dZMGRYNm5vaE9SWmNOejdqakJCWi80UVhMQm5rVW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZmTlQvUzdSNC9hOFRjdHk3aGl3UWNqSXVtVmNqT01BbXlUUkNEOGluMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3dvMWtnTHBhMFBiNXFyNUhnWlNvSFZ6SExQY1JSWWtlQTdFa3Z1by9tdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBVczIxcDZoL240eStKSGpFVU9STEdZQ3FESFozamtEOXU3aTh0NFMrMitLSnNMeVAxZDgwb2lhdTk2aVlvL25oMjdJUWxtYzFhVHY3Q3EycDRoR2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6IjExSXhTVEM4cWJ0VUhLQjc4VVNOQ3VocjFrRXYydUluaGpWdkNBNEdhVk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTk4NTI5MTEyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RTNCQzZGMTI0QTZBREQ1QUJGQjJDRkVBMEQ0NTczIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE3MTgxNDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5ODUyOTExMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTIzNzE5NUZFNkY0QUEzNzI5REI3RkY4QTE2ODBGMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNzE4MTQzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBTTdKQUdTSiIsIm1lIjp7ImlkIjoiOTIzMTk4NTI5MTEyOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiKuKkucKz5LmbIExv2YHKjHIg44Oj8JOGqiDjg6Pwk4aqKlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG7KlcuWzZzNocuWypQiLCJsaWQiOiIxMjMyOTE5NTE5NTYwNzU6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tURHlITVE5dDZHeUFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImI5T0dKWGhQcE1GdlVzZzl2TmhGc3AwMWNZNUlzMHNLRG5BMDJuUHk3V1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNyV2szOElQOUJ0ek5rckZKMWwwMC9QTnAxSlJjRFl4MzVYY0w5VlNJZ1p0dHFuZWFyM0FMTGpBVitIREVvejVjbG1FaG5DWFZJMjJwNVBSbzVZRURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMcDFMUEhBTGtLZW1yMmdnZXRhSWtjeVZCVjR4aDJQL0VLbUFGQzZGT005Z3ZwK0ZlV0VnemhRQjN0V2tzNlNBR3E1ZFJybDNFUytEVG5JOFgwMk1pdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5ODUyOTExMjo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcvVGhpVjRUNlRCYjFMSVBiellSYktkTlhHT1NMTkxDZzV3Tk5wejh1MW0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTcxODEzOCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFT0cifQ==GlkIjoiMTIzMjkxOTUxOTU2MDc1OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLUER5SE1Rck5pR3lBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiOU9HSlhoUHBNRnZVc2c5dk5oRnNwMDFjWTVJczBzS0RuQTAyblB5N1dZPSIsImFjY291bnRTaWduYXR1cmUiOiJ3dkd5ZURrYUtxK0NjR0NvNldVQVEyMlR4MWF0ZVF6cUowdzAzWWdJQnJrMUs3aE1jb0pvclk4cHlLclNJR2hLdUh0dzlOc0VEUEhHR1NrL3p1Zk9EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRWlIQ01aQmdxTGkyaS9leUVDVS9WTzZ5bFVSTDJqeEdQTHB5RmJIU043aGhWemJOSEM4YS9vV3BtRy92bkpybUtiRDR6MmxHV0lqdEIzMVd1akk4aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxOTg1MjkxMTI6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXL1RoaVY0VDZUQmIxTElQYnpZUmJLZE5YR09TTE5MQ2c1d05OcHo4dTFtIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE3MTcyOTcsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTlBrIn0=", 
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Ayan 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "false", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923303788282",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐌𝐑 𝐒𝐇𝐀𝐁𝐀𝐍",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923303788282",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
