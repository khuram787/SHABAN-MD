const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkgwMks0RGwxeUx2ajV2L0diR2NZQWVjSkpvN0lpWU13bmVXaW9iOFFWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkFVVzBGVVVUR05EcjBIa3RydW01aDhNTlg0Q2pXcXozY04yMlZrWm9rRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpR3BSYkNhd1dxQ0pBOHFsT3hVUXViVXVQRm5ieG9MSWx2RzRzNEloMkZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3U0VMaVJmM2tzOTdxRkxjc2FFbW9UcU91NnRMQ1A2U2VqcVRodjZKMVZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDcVF5cTdJK1pqQW9qWTNOWDgxWDlOb1hER0JpQ1VLbm5uTlhFdWttMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhiUFc4TEYxRDhjekpvZG5zQUpCREJ1ZDlWUUtkZU1tWXFDaDJBa1JHbTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ09VbHJLQVJLQ2dxQi9kWDlUY09UL2ZpWWI0VWhzK2NTZFl1a252czhFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFB3RnR0Ny9Pa2JUdUZTbHY5cXNXa1VteUJOcWNrR25uSFE3dGhYQ2dCOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpLUWdLbExpU2hxNXlaQkw0SGZtQmRNNy9MdWQyMzhyWS95akpFS28xb1FwK3ZkV1pIeDFNYldWM3RjeksxamN4Q1BDZ1RUczFQNHF5RGkraS9ML2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJoY3dFTk5TKzJtMnhlMTJxbXFEbkwrUVhyVzlKQlEvU2s4ZkFDRlRzZHVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5ODUyOTExMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTM1MkNEMTBGNjk4QUM0QjhDREVGOEIyN0VGNDNGQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNjY0OTgwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI4QzFWQUQ2TiIsIm1lIjp7ImlkIjoiOTIzMTk4NTI5MTEyOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiKuKkucKz5LmbIExv2YHKjHIg44Oj8JOGqiDjg6Pwk4aqKlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG7KlcuWzZzNocuWypQiLCJsaWQiOiIxMjMyOTE5NTE5NTYwNzU6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIRHlITVF6TCtEeUFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImI5T0dKWGhQcE1GdlVzZzl2TmhGc3AwMWNZNUlzMHNLRG5BMDJuUHk3V1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5jNjNUb09CWjY4alZMMWQ3UGU1clhDRGw4R3BxUzRXWUZ3NnJRUHF3Nkl1WXF6WmtnL01pU0JZTEd3SHlCVElJNTk2ZDdHL0NWQXVVOFdnVy9YMkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJieTJyanY4VzAzVytvR2FDNUFGVko1RmJ4SWFYbHdVK2JBYVZ5TWY0TnVHMHJZUzdRUk1FWEgrMGluKzM1K3hkejIzZlhpR0tHUnpyTWF5UWU4R0RoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5ODUyOTExMjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcvVGhpVjRUNlRCYjFMSVBiellSYktkTlhHT1NMTkxDZzV3Tk5wejh1MW0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTY2NDk3NiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCdnEifQ==",
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
