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
global.owner = process.env.OWNER_NUMBER || "923135673658";
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
  process.env.SESSION_ID ||" eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0lhL0hQZy83NExqWSthL2ZOY1NSYkQ1WGF0Y08zdTVHdm52WEVZQy9Fbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZk1yY3dpSXljdlNNYzNianMwOHV3S3ZlRzBUMkZRZmM5NVJDMFBJeFhoYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTnRSRTgrUFM0MHR3aGlyeXZZRGhGQ0FSSzJ0dXkxbmQvM2ZqN1h1TUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIdTJqY0I2S093d3ZKUkU0T0loWE1yNzZ0bmNLOWdsNnBEcDJtaU1PU0VzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHY3lhRk1PdnZpU2FUZ1pqWUpnRUN4Vi9PbTFVYnc0WmRpZnM0aGhHVVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik00cXJMQjZPQ2pBaW04YmYxRVlyWHdTZThNS1pHQnJzSGRUTVYwcFBwUjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01zWlFYYkltK0pGcTdMMkJMeUxndzNFeXFLR0RLb2JIblVTUkpmK0xFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3RORHpJT2xtbEd5RTZkcmJYcndveVgxVTh4TDllMGVRTXlLbEF5NndrRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAzcGRiTS9vWjB3MDhmVjlUSitGbU5uU1d3NW9ZdTVXdUdKZE1FbUlhSVNkQVNWODF3TkwzZWtOYlk0UzJKclJ0eUhHNjJoUUFYNDdsSnVVKzVDd0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6ImJWT3d3NWNWYmxYRUgrZmsvMHlER2F6dlBxRy9zS01hRHBNdmllVi9TV1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1Njc0NDc3OTA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUzRDY3RjI4N0NDNDlEREQ2NDYzNjM2RTU1Nzc4NEI1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3MDAxMDl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTY3NDQ3NzkwOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQjcyRjQyQjIxQUFCMzU3RThGRTgxN0YwQzk4QzVBNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NzAwMTEwfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOnRydWV9LCJkZXZpY2VJZCI6IldUaVZ5QTdzU0hxTmpkUThJLVdnNEEiLCJwaG9uZUlkIjoiNDdlMjY4NWQtMzE2ZC00OTc3LWEwZjYtNjk4YjYzY2E0NTY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ2dmJsRldkMFBkYnA2ZDVLSjN1ZXhnSWZucz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOTGpxd1JJWmgzN3BlN09nRUpSL09NckNwbTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM0w0REZTRDYiLCJtZSI6eyJpZCI6IjI1NTY3NDQ3NzkwODoxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLihJ3wnZWA4oSC4oSN8J2UuOKEnfCdlLso8J2RrPCdko7wnZKG8J2Sk/CdkorwnZKV8J2SlvCdkpQp8J+HufCfh7/CriJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm1OemZrRkVQdVVnclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNnVVTk9FL2JybGk2SGxRb2pyakpwU0ZyeEZieDNqRDBJSkFVOHJYaitTYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRTliWmZPOFhGVWtRYmtKMTkzZ3daZEFSTm9nRVZhRFV4aEhKZ3FoUFVnbDVHWFlOaitQZDloenZ4TEw3Y09KOWI3bGpiY0t0VXdadlYyMEw4dnZnQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InhzRys3WUhmQ1RKdWNSZENRL0lNMGY4NHR1M2JmUnhQcFRWSnJLY0Rxb3lSOEdJRHo1MmxUdS9NdzRWL1dUY294YmZrcGhFdk5jSWR5VzJheVdaWURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Njc0NDc3OTA4OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVybERUaFAyNjVZdWg1VUtJNjR5YVVoYThSVzhkNHc5Q0NRRlBLMTQva24ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3MDAyOTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWhoIn0=   "
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "ℝ𝕀ℂℍ𝔸ℝ𝔻",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "𝕊𝔸ℝ𝔸ℍ",
  errorChat: process.env.ERROR_CHAT || "+255674477908",
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
