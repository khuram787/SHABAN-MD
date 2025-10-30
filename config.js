const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || '' '' "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05rZ2VXa0QrS2FYZS84ZE1GZzB1K1JxaXRFK1lkN2M2MU5ubFYzbFRGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1pMb0c5clVURHE2U0VtK2Nla3NTUTh1TFMwZlNYZmVmcXFMbzZwOG55Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQlJTazl3Z1BkanJtNU1Od1IwalRRTit3bjZoSWZPUEhYemR6Z2xoSTNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QzdTN3k5Szc4cnI1czJNbEdJRHFEWSt0VkZkTjFwUHZzN2lhUDgrdkNVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhCcEN5T3o4T2NjdUl6OGVnUlpFZHFKWWlJR21md3hTSmNxNXBhWWUxV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFoNUJROW9vYklyaWNVUUNhWmpyQjMwNkFGT3lrUkVnTU5yZCsrRWFRVTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdMcjhncjlYUWNxeUcxTGh1anh5UnRFdjNDZUZIS0hCeGY0YU8xWDBFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1EvdVRCWUUrSmoxSHFQcHpKVmdmd1RUekl5ODlmTWxHVk5RdmFyTkZuUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxIV2VtYzc3S2c2N0FIMVphd0lIZWZNZ1dmTWRRenJxVElZK2E3RGY4K2JtZU5iMGtnYXZKeVM1cWM3QTJLSUlZRWdrbWRtWWprTWdweVFFQnE3OWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6IklqUi9xMmhmb2wvMllNeWg4YkxnWmk5bGI1ckNpU05ZSiswOHNlaitPL3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3NzI0NTE1MzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FFNjZBQjJEMjU3NkU1OTZGRDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTgxOTExMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVlRRMVBBMlkiLCJtZSI6eyJpZCI6IjkzNzcyNDUxNTM4OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5NzQ5MjIxNzY2MzcwNDoxQGxpZCIsIm5hbWUiOiIq4qS5wrPkuZvPidGU0L3Rlc658JOGqiDjg6Pwk4aqKiAgICAgICAgICAgIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLakFoNjBHRU9QempNZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4YUJJU2NvZEZtK2JyZnArdmtqNHBEbkRzaTFQTkJBcmJmaEwyMUUxSlUwPSIsImFjY291bnRTaWduYXR1cmUiOiJiV0l4eGNkd1QwUE8wS0QyOHFNM2YwSkNWZGF3V0VCRXhQTkVCb3llRlZjRFN2d0dxT3huTHM2RzllY2xsTUlPcVZWNTBHdHVvVXRzRHBiTVloeWpoQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOUZQS3o1alFPaDVhdURjUGJmSlN1R1AxeUpBenJMaVowZzNwR2VVK1BmVkIvbC9HUnlDZnRpNVMvalgvcGZyRlJqcElSai9QUmRFdGFBM3V1TVU2aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5Mzc3MjQ1MTUzODoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNXZ1NFbktIUlp2bTYzNmZyNUkrS1E1dzdJdFR6UVFLMjM0Uzl0Uk5TVk4ifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxODE5MTExLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJQcCJ9GlkIjoiMTIzMjkxOTUxOTU2MDc1OjEyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3JEeUhNUW4rdU15QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYjlPR0pYaFBwTUZ2VXNnOXZOaEZzcDAxY1k1SXMwc0tEbkEwMm5QeTdXWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoia3VEZkVrK0d0ZGZUb09JL0N3cXBLald3U3JnQkt1YUZrekVWYml3Q3ZSdTBuK3RuQnMyWFJ0SUkxUDJGeEJtNVRDeE4xMVZXeFhHdHJEdzFVWFhlQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IkZrYlArcm9oS1lTWk1ZV2t4cVJ2SVo2bHFZRTJRUmhLVUJUalQ4aVdjWFkxQzlzS0RYcVJtNTJKbE10Ty81L0tYWjBYbG8rRmUzRmlsL1R5bjN1Umd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTk4NTI5MTEyOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcvVGhpVjRUNlRCYjFMSVBiellSYktkTlhHT1NMTkxDZzV3Tk5wejh1MW0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTgxODAxOSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHOFIifQ==GlkIjoiMTIzMjkxOTUxOTU2MDc1OjExQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS25EeUhNUThwS0p5QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYjlPR0pYaFBwTUZ2VXNnOXZOaEZzcDAxY1k1SXMwc0tEbkEwMm5QeTdXWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWW12UVp6UXNRamVURTR1UlV5NExiS2tjek0xblN1a2sxVEwrVzc2eFUybkU3U3FWYk9QaVhXMkJWRE5NVUh3cXVBbnVpenZId21wZDQvYUsraThIRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkJVUmtWTlRtZk4xazJCYUNLK3pNUkhpVE1UL1JhOU0vVmUvbVh6OVplbmNtTDlaNkNUR2lCK1VhV0wzYmt6VDFJckoxWFA3aThkMlM4cm9Wem55c0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTk4NTI5MTEyOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcvVGhpVjRUNlRCYjFMSVBiellSYktkTlhHT1NMTkxDZzV3Tk5wejh1MW0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTc1NzU1OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFONVIifQ====", 
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
