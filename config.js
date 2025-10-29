const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk41VjFwSUZZUUZZak1lWnEyWGs5K0lsUlNNdVd1bGI5akkzS21sK3ZHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTdxZDlES1RjRlRSMlREbm9WQWVlaXV2eWYweFZLL25zb1ZGaFFsNXAyMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QjgzcGMzNUpySVJwTkM1VEszZDk5bzNveEdSTHZjRHN5Z3JtQ2dCOFhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkeWsvVGFMcjNNQS9vVmc3cFRCN29rZmxDZ0ZXV0hZZWlhRTltWXNNckVBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklFTkIwc0xaOHBsclJ3N2o1eXYrL2tFbU9zZkZINlhhV25QdTliWXBjMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml5K0FmUG51MXgzQnNSUjZFaWEyUkh0cnlhWjcrU3lLWFhHNUx6ZTUyMmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBMV3JGdWpZZVpXYjVXclFwbzlpZkQ4NHpaUExNZUFnVnhUQ21CWXZGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVlGQTVTTEo0dk1uVUlCbFBxZGk0a0grQXBpWVoydjRCT2FRNzh2VXdnND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhXeFZHMGZ1ZXBhMzhPNXRrY0hzalp6OFZzQ0pIdUQ0c1VHSDVmdHR4c29DTmFkZmpHT2YyOHRyd3pCY2dPcGgxT0FHR2VKTFdDaVhFS0J4QVBMdWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6InV4U3M1UVppYU4xQVpabm1PZzJVMWtFR0Y0TUlYSllnc2U0dHFTaTlNQ289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3NjQxOTYyMzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNBQ0IzMjlDQjBBNTdCM0Y4MkZFODZEMjYxQ0RBNzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTcxNTkyM30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3NjQxOTYyMzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM5NjU0RUNDNzcyNUZFRUU5MTU0RTQ2QUNGOURDODEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTcxNTkyM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiN0wyUlRaTTEiLCJtZSI6eyJpZCI6IjkzNzY0MTk2MjMyOjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNzU4MTA4MTIwOTI0ODA6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xTRnZ0OENFTXJOaHNnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZmdWZJSVJCVUZDRnFWSFJxcFZkQ3ZHNGg0dFNwN1lMY05lMTFFUUQ4aTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpTYVRmeFgvbnhhU2l3TnVENWFTM2hxRG5BWmpKVWVLdlhQOVVTTENYNWkvNDVkK3VxS0E3d2p4U3ByVkVXQjVVc2VTTXJpemc0S21scjR2V1dPZEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBR3lzS1JMVTNQVHU4dHkreWlnL3QrU2hKc3pBNG4vV2M4ejQ5bVJDNVFxOXIzRVRTdVNjWEM2WFRsUDkvS0NONEQvNUtqZ1AwM05KSGs4WDJuZDhoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkzNzY0MTk2MjMyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlg3bnlDRVFWQlFoYWxSMGFxVlhRcnh1SWVMVXFlMkMzRFh0ZFJFQS9JdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxNzE1OTE4LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYifQ==",
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
