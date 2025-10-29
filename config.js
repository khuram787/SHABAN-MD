const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || '' '' "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUwwZE85SlBrR3FGVFZLcmc4YWg3MFBlczJMd3NuSGROMFFYamF5QUIxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05kOWdLT25GVkx6RjZkTnkrbDdtOVNqMlhxK01KVmtUaFJsSUVMMmFRMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQldrYXROSEhsMWFmWmRFdGlHR3ZzM0d1a3FZSW9sM2NaRmlPeGZoL0ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyNnFkVmdnNDJDdEZzVGk1MkFTNzBwM0dJelViUFVjcHV0N2E3RFdPa2kwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOSzNPajZuV0dDS0lDMEtlNVVoZ0J3YVIvbnpqZ0ZsRkhUWkozZXRvSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwrK2VMeTB6YmNPbHJYbnZUalZzay9iR2U0S0hpUW81Z2xnZ3R5SytIbnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05qT2pIdjZZMG9hWmxCVUduN1NHdkU2dWJFSkVEaG00UXlvanh6NTlrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYllSMjRBcDJ4ZkFZWTJXemRaOEF3d1dvTnlFZ3RsdnViSXpJYzlPVnVIWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktxOXJvNW9lZ2NYN1I4Vm5KSitmY3JTWVBtd0lPOXA0cG5wVjRvKzdrQndXeXlWWUV5R25EaFBsY1NxMnRNcGgveGEwV1JjdGxYQVJsYXB3Uit1U2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IlN5cXVIWnhOandVRTlXZVdHa2FEWGV1RkNsZStOa2ppSGw2RkVyTFg1bUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IloxUjRDUjFFIiwibWUiOnsiaWQiOiI5MjMzMTg4NjAzNjY6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjQ3NTE1NTc1NTcwNjczOjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOSHAyTjBERUt2bGhzZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkcnlVSVJPMTBBYzF0MWlXaDhyNTB1bTYyMk9mV21zOWw4am5iRDM0K2hrPSIsImFjY291bnRTaWduYXR1cmUiOiJRU1ZrdHJTcFBVUnJzZjJKZTdLS3JFUnJIUGovdE40Y1JXeFZQb2dDc282ZDZBMEVqVmFwRHdHZDB0WXY1SjZ1SkJHWWI5S0d2T3I4NVNib3lCTXdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOGhJaTV1K01mNTk1Wk9BcWVmN0hFUFh3eEoxbmZRdGI3UWQxa1B1UmNDd1Nqa0VqMnptamlRdy9ON1F4L21ZQVRvYnp6SktLZUlqN2RlelVlMi9oaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMTg4NjAzNjY6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYYThsQ0VUdGRBSE5iZFlsb2ZLK2RMcHV0dGpuMXByUFpmSTUydzkrUG9aIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE3MTg5NTksImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0RBIn0=uYXR1cmVLZXkiOiJiOU9HSlhoUHBNRnZVc2c5dk5oRnNwMDFjWTVJczBzS0RuQTAyblB5N1dZPSIsImFjY291bnRTaWduYXR1cmUiOiJ3dkd5ZURrYUtxK0NjR0NvNldVQVEyMlR4MWF0ZVF6cUowdzAzWWdJQnJrMUs3aE1jb0pvclk4cHlLclNJR2hLdUh0dzlOc0VEUEhHR1NrL3p1Zk9EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRWlIQ01aQmdxTGkyaS9leUVDVS9WTzZ5bFVSTDJqeEdQTHB5RmJIU043aGhWemJOSEM4YS9vV3BtRy92bkpybUtiRDR6MmxHV0lqdEIzMVd1akk4aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxOTg1MjkxMTI6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXL1RoaVY0VDZUQmIxTElQYnpZUmJLZE5YR09TTE5MQ2c1d05OcHo4dTFtIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE3MTcyOTcsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTlBrIn0=", 
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
