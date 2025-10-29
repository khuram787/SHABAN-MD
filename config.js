const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || '' '' "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0l5ZERhSm5jdzZvVVRudEtDSWoxT3F4a2M3VGN3ZnJkWDNUb28xSzdrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFd3S3lyRzFHVTFuclRLVFM4dW5EWnc2NjRnTnhydnA1a3M2d2l1dnJucz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT1IyTlNvZTRxR0Z5Ly9lcGxZaXR4RHBTKzNiNUVITzdzZnRJKzlpb1ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyOEM5S2lzQkpGSkxDYlh0aVZPaXlDVjN4YVh6aHRuYlYwNWk4K0JraDMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEazArMzBjbmdsT1UwQmt5VEpWdXVVOHprbW1KazFlZjJidnQ0ZW5rVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdSNHBnZzZYZWg4KzZ3Wkd2TzF6ZVFqaWRxaTB6d294TGF6UFR4cy9mUzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEU4TXlGcmM4QmtBTVNvWUg4Vy82OG5BUkxUdzNjZlJycHUyLzZFMTZrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialpFT0JhanRobGlHYjhVdDNYd2Z2Q05iUmZ2N2hSVDY4cmVYSkxVUUdubz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ5Q3JCdG1pZTJpNUtWUkVlZnlpVVpHeU5idFFhckV0alhvbnN4K0h0Q01BSEpnc1hVWVVNNmNtdGxYT3E4WDhOa1NaUnNRTDVNQ3lNa3lMbG4waUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJ1eDhncDJ4N1B6SXJ4UDMxMDBCYTZ0WWhrYms0T1JRMUFlclpMVXU1UlZjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI2VjVESDFCVCIsIm1lIjp7ImlkIjoiOTIzMTk4NTI5MTEyOjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IiripLnCs+S5myBMb9mByoxyIOODo/CThqog44Oj8JOGqipcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuypXLls2czaHLlsqUIiwibGlkIjoiMTIzMjkxOTUxOTU2MDc1OjExQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS25EeUhNUThwS0p5QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYjlPR0pYaFBwTUZ2VXNnOXZOaEZzcDAxY1k1SXMwc0tEbkEwMm5QeTdXWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWW12UVp6UXNRamVURTR1UlV5NExiS2tjek0xblN1a2sxVEwrVzc2eFUybkU3U3FWYk9QaVhXMkJWRE5NVUh3cXVBbnVpenZId21wZDQvYUsraThIRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkJVUmtWTlRtZk4xazJCYUNLK3pNUkhpVE1UL1JhOU0vVmUvbVh6OVplbmNtTDlaNkNUR2lCK1VhV0wzYmt6VDFJckoxWFA3aThkMlM4cm9Wem55c0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTk4NTI5MTEyOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcvVGhpVjRUNlRCYjFMSVBiellSYktkTlhHT1NMTkxDZzV3Tk5wejh1MW0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTc1NzU1OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFONVIifQ====", 
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
