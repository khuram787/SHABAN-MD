const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0U2bVRJYUdGZEpTa3QvdEtzZzVaWTdpM1UzZnFyS0kzMncra24zdlhFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjRSZkRuQXJmQWV1L1JkSldTeFdNa0ZYSUM1QmUrV3lQdXhIK0pYQjAxWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUG9HdDNUUkNxdVNxbjJ3Q3ErR2FRS25ZQk9aOWcwc2hlb0twT2VpWVZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1eGxxKzFNTUt5NXR2QXpOUGQ2MTNLK1VNdzFkaUF6b0w0eE9MY1RtaFRJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJVzkwZWs4N2I4VmRXN0FHc3htT2JySXUvcStpWE1WMDZGZlIyVXVBbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFkY3JZVFhEVGZUMGlxNVFFMVREZVdBOVJjTWR2b295QlUxQytlU2RnVHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9nengyaWtiMW1ObG5HM1YrR054UkMzaXJwNWpDR2t1REpUL3pIWjBWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFFkNFJIbGo1djFzUW4zUlFpUm5jdmJDZGR3WE14ZGZiSkxtTjdTa2d3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBYOXBuTElIN291SDdvK1M0bjJFOExVeGFheHJ6d0xYWG1GaTdCSWdQUStmaHliNGpvRy96dDQ3Sm40SWovUlVac2FJZ3ZsQWxDeHFDZitnTmsrQkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJ5dHJja3ZPbFBJcWhZL2RmV05RZHEvb040MVRnWFJ5YlN5dXp6VDdxSUN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMyOTczMDY1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzFDOENFQkI1QTVGQkY3NjlDQTZEREQ1N0UxRjI1MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNTM5MzY2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMjk3MzA2NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxNDY1OTlDRjREMTM4RDRCRENFOTcxMUQ0NTAxMzEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTUzOTM2OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNlMyUk04UUsiLCJtZSI6eyJpZCI6IjkyMzMyOTczMDY1NzoyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzQ0OTM1MDMxMjM0OTk6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xLRnZ0OENFS0hxKzhjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imdxck9vR1Z5QkZvdEFhSzZzUTdlKy9ESUNQWTU2OUNnUWFiRVc3eER0a1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZSdE15UytaVFJ4enJuWTA4U1l0ZzdhUWdyVjg5ZXJKZzNqVEEvUXRjZ2FvKytlaStScTI5ODVhWjRMNlFFaVdJaGZVZ0wvbmRBSjYzYnhYRDkzeEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqM052aW1TQ3F5T0lJNHBYQlFEeHNyY2N4b2RzRUUzTzFRd1hUb2hVY0ZJUVlyR0lIcE9GVkQzV2k3UnQzRlJTSTdpVFR1bmdPSEpkQ1BzYXVRSFlDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMyOTczMDY1NzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllLcXpxQmxjZ1JhTFFHaXVyRU8zdnZ3eUFqMk9ldlFvRUdteEZ1OFE3WkcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTUzOTM2NCwibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
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
