const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254751551511";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_58_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxODksXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgNjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc5LFxuICAgICAgICA0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia1BYMWVhOC9WUWFINkNLWS9tTURiTms3WXJ5eFFXUjMwN2NLQjlxeCtoST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTFlyODU0akdSeS1BUXlwRXByWmZKUVwiLFxuICBcInBob25lSWRcIjogXCJkN2ZlNTg3NC1kNTI1LTQ2ODctOTYyNy0xNzdmOTEzZDc1YjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMTU5LFxuICAgICAgOTcsXG4gICAgICAyMDYsXG4gICAgICAxNzcsXG4gICAgICAxNTksXG4gICAgICA2NyxcbiAgICAgIDExOSxcbiAgICAgIDI5LFxuICAgICAgMTg3LFxuICAgICAgMjQ2LFxuICAgICAgMTYsXG4gICAgICA3MyxcbiAgICAgIDI0NyxcbiAgICAgIDkwLFxuICAgICAgMTg1LFxuICAgICAgNjQsXG4gICAgICA1MCxcbiAgICAgIDQ2LFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDgzLFxuICAgICAgODEsXG4gICAgICA4NyxcbiAgICAgIDM3LFxuICAgICAgOTgsXG4gICAgICAxNDksXG4gICAgICAxMDQsXG4gICAgICAyOSxcbiAgICAgIDEzLFxuICAgICAgODAsXG4gICAgICAyMDIsXG4gICAgICA5NyxcbiAgICAgIDI1MSxcbiAgICAgIDEwMyxcbiAgICAgIDIwNyxcbiAgICAgIDIxNSxcbiAgICAgIDE2NyxcbiAgICAgIDIyOCxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlIVjVUVDRLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTE1NTE1MTE6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCbGFxXCIsXG4gICAgXCJsaWRcIjogXCIyMTA5NDM1MjcxMTY5NDE6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0cxKy84REVJSzV2TG9HR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4Wm9ZcFEvVU1wcm93SEZJMzhFOTVtZ3J2a3FyRC9sKzlPTGhSUUNIL0NNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNoQTBwTCtOcUtZd0lQNXZxTWhZeWpCYWsxY1dGRHN5bWxnNkRXbTA0MlhrQWhwYUhFYlpTVUZ3RnExRHJIeU9mMEVtK041Qkh6SVJsY3ViN1JFTkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRNRE5Ob2I3cmhPenZVcDAxYzM4YUhuWWJUTHV1dlFhaThEOVgyMXpjS1c4VHpHNk42TjBBSXkzR0w0eElSdHRVTE12SFZkM1JrcWZHbWxESVJmS0NRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1MTU1MTUxMTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzIzNzg5NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
