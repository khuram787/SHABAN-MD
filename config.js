const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNxa0VKdkRZa1RoRXRMQkhMczdPU1VpNEM1VnpwcThZN2FZanZac0UwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWhxM3pLSDFxdE1hRzdnUEZFWlZ0RnBFMllDVGZwTDRCb3A2dGNETlVCTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UFZ5TnNzbHF2OFd6dGRFZjVBMWoxcHdsbXY3MjFvL2ZXanJSVFk1bzFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCQkRSOFJTdEFwZDFsbnVycU5tcWIwd3NvZUdmWUh0Z0JqWmRxNHVQSWtBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNMlo4eVQvQ1JSSVgyVzdBUjFKVVhZR0NQRjNQcUM2M25WV1pIYjdIbm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKdEh4WkxOeXBNanZRTEp6dFpjSzF4VmdTdWo5U0ZPV1I4Q0c2Qyt2QkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUFROFF1bUJUdGZnN2ljVlZEZGEwRjZEdVhIQVUxeDhkSmR1dkZSRG9uYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzE4Z3JvZWU3WS9HZFpIb1hHWXlxTEtDSWNrdXl3dDdtaktCU0RmQVlHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF4UHpsOXQ2dTMxczhueW5VMTVRYkliYnY1Rk9tQnJzQlhCYThwc2lYamtVRVUrTmF2WUxSdnRNb3NkZEJWV1ZtMWpUQzVmcExuUGo4amdvT0w0NUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6InF1YlhON2xPcjVFMitPSHJ1NkhnbkRjOVRNSm9RcGFPVGFybHEyRFVsSkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijg1WFM0M0E0IiwibWUiOnsiaWQiOiI5MjMzMjk3MzA2NTc6M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjM0NDkzNTAzMTIzNDk5OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMT0Z2dDhDRUphVS9zY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJncXJPb0dWeUJGb3RBYUs2c1E3ZSsvRElDUFk1NjlDZ1FhYkVXN3hEdGtZPSIsImFjY291bnRTaWduYXR1cmUiOiJ1WjQyNThRWXVyckt1NUxZUFl6UGRoUGMzVTNzc2duRzdhNTZpSlFKc0dEZTliMitMQXQvMng3V1RjS3lmTGhDUC9OMFNiay9pdkNIUEwrSGpTd0tEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSkpVVUJSa3VITmp4bkgwQ0VnZVgvN0Y0UThIajlRVHZ5eG11ZUFEY3k0Y2JMVWdTb0piVUZvYTJiNGtxTEpkUXpqdHM1V3dRQzJLRWU0UWEwMEVzQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMjk3MzA2NTc6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZS3F6cUJsY2dSYUxRR2l1ckVPM3Z2d3lBajJPZXZRb0VHbXhGdThRN1pHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE1Nzc0OTgsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
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
