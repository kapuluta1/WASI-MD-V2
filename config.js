//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923135673658,923192173398";
global.owner = process.env.OWNER_NUMBER || "+255789622341";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFwUXB4RFNpVXU1SmowUzJNTkY1S1ZrbWhUbTQ2VW45bWxFV2hWMmJIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2kyVDVDc1BoTjJ4RWxNM3ZPeEZOZWJHeHFGajZ3RlVyckM0VlBCOE5DZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSmRzS205VXBodGhNS3dhSHpjMVhkYXJWdUxKYnlCY2FYcnpjN1gyWW1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXM1lmbmhZVUxJSjRuSVBHdHMvVmVmdjQyUjNrYnN5eGFZeG4wZWs3QVR3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCK0FhcCtvUHVBK3FaQkFNaXlwK2JJaFpWK3d5UVZzcnMxdFZHalgxV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktMS0FxU3hHaDNHM2FGUUNtMG0wc1MvNTIzWm9sbmJnaWU5SFE0eVEzM3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xFeGhaRTVjaEt1cDJyc0dzS1BMb1A2RDMvUkN5MUZYRnRvMWlYbFdrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGY5ZHRhNHlOQkRhbFA3TFpPTDlXN0h2ckxuUW1WZEMyVEhOQnFlcDYxND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpxYjJjRkl2N1czSnQxQXM2WEZsekZ4M3pwWTFsUjZveHBTcEJwYzdxVXVuRkFQS0NMcFJhakRpNEE2enJoWHRBT1l3aEFkYnI3Z0s2b3p1UStoeERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJnSWhEZmVhd0xOSGdvNXlMZGRpM1FDcWQ0cHZRZmpqVTRkOFlBZ2ZBZ0J3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc4OTYyMjM0MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2N0MwRTlEQ0Q4N0U1QjJBQzZBMzU4MzQ5OUQ4OTNDMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNjk4MTI5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJROVRjTzJlelJJU1g2dnltLUhrWHF3IiwicGhvbmVJZCI6IjEzNmIyMWFmLTA0ZjAtNDE0OS1hZTM4LWEzMGM5NmI3OGZmMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0K0p4cmYzMmYybmVsZmFFcnhWS3lyL080NHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzl3b2Z3MDBlK21iZzJoRVVPSGJGWW5SYmdVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE1OENEQUYyIiwibWUiOnsiaWQiOiIyNTU3ODk2MjIzNDE6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oSd8J2VgOKEguKEjfCdlLjihJ3wnZS7In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLVDFxSWNHRVArSnY3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMUDJoUXZ5cm5SekRFME5GVEtNOWZkMnNJTENpUU5TY3BiRE5FZnZobFZZPSIsImFjY291bnRTaWduYXR1cmUiOiI4a1FGMlNJTjBuK2FMb0d3TlpWNmE0MkprUGU2bzZIRXkrZ3RST0Q1dXZhU0FRK2tDd0VHRE1WS1FWTVZTMmN3enlKUDlTWEJQbHoxdndDYnZsc1pCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUFVMVHVSbUR3YlFGakRFdER2dHUvWDZxdE8xOUh4bmYyUEpPZDdnd0JhOHo3c1JGakZoc25JblB0NGw5aVhQTmZXSWQrcVZHYjhwZGtKV1FCSHVwQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3ODk2MjIzNDE6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3o5b1VMOHE1MGN3eE5EUlV5alBYM2RyQ0N3b2tEVW5LV3d6Ukg3NFpWVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDY5ODEyNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGdVMifQ==     "
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "𝐑𝐈𝐂𝐇𝐀𝐑𝐃",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
