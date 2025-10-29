const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || '' '' "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ZBL1JKVU5kbXNMU2NrS0k4aFczUjc4WlZGUzlxa2hpUFRDUmdWeHYwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVNPazlFdTZEMmJYUlhDYUJuZlB1NEIxcjJTZVhnTXhsQVRsbmNHNlFCWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSHp3MHBCNk0xWkp4SCtiOXpTN0pYajI1NkFDL0lNa3R4OHJxTUtudFZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwVTJlOXFDRGpqbUlPZktTc212YXlqREViZEk5a3Z6RzdqRU53UU5hOVRZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFOSklqWG9KZUxBeHl5S1lYUVBGbUsyT0xFRWhFV3dURkdJQjAyWXByWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4ybEpINlJpdy9ZaUtwZW1tbXp6QWptSmxEY04xSXprbEJtOE0zVGtCSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVtNVZpeWJGeG1RVDdzQ0RjdUlSZTZDdm9xYzRlTWFHb0pld3QwT2dtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzN4Mm9QeWZUcUJWVjdvTERwRHYxS1BhN09WL1MrNWQ5Y1hLTDRBS2kxUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlViZzBkYWF0YnkyNWpVTW81R3QxQ3hZWTNCQnpZOHYrS0pxeVpha3J6UG1QNGduQmV3RVVXSTl3bW1HelNqVENlWHZKUkVhdElmRFYzcUNNRytRdGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiL2E1NXBXdEw0amx1VjRnQUZBWmJpcDZRVWJ4WFZ6ZFJGMUVOblQ0dEg1TT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxOTg1MjkxMTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVEQkQ2M0EzOTBBN0EwQjYwNjNEMzdFMjM1QjcyRjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTcxNzMwMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUk5NVkNHWkgiLCJtZSI6eyJpZCI6IjkyMzE5ODUyOTExMjo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IiripLnCs+S5myBMb9mByoxyIOODo/CThqog44Oj8JOGqipcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuypXLls2czaHLlsqUIiwibGlkIjoiMTIzMjkxOTUxOTU2MDc1OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLUER5SE1Rck5pR3lBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiOU9HSlhoUHBNRnZVc2c5dk5oRnNwMDFjWTVJczBzS0RuQTAyblB5N1dZPSIsImFjY291bnRTaWduYXR1cmUiOiJ3dkd5ZURrYUtxK0NjR0NvNldVQVEyMlR4MWF0ZVF6cUowdzAzWWdJQnJrMUs3aE1jb0pvclk4cHlLclNJR2hLdUh0dzlOc0VEUEhHR1NrL3p1Zk9EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRWlIQ01aQmdxTGkyaS9leUVDVS9WTzZ5bFVSTDJqeEdQTHB5RmJIU043aGhWemJOSEM4YS9vV3BtRy92bkpybUtiRDR6MmxHV0lqdEIzMVd1akk4aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxOTg1MjkxMTI6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXL1RoaVY0VDZUQmIxTElQYnpZUmJLZE5YR09TTE5MQ2c1d05OcHo4dTFtIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE3MTcyOTcsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTlBrIn0=", 
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
