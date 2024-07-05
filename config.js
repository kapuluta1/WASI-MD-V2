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
  process.env.SESSION_ID ||
  "   eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNoSmFNQ01RdWFCRzB3cmpNdDdncUZqK0VBOE54cm4wK0k1SEIrUHRuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFgwck5WRUtzdlFHNTNmUDh1NEJUb1Z0VjdkUUVsLzBUdVZSZGJOa1MzZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTzVVRjdSb0t4OU0zY0JSKzlZejlCdndUR1psbEQ0cVZ3QnI5bkhQekdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2TE9uNkJxVU1Yb2xxaHNneGxidmJIVTRwcnJMUllYdEtyQURjbUVsSEQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBaTJYd2JTUVZvZi9lN0VRUHJMdGFYRU9EcWhjOG40clZIbG9OaVlGMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFvWi9uNTdERzlucGozTENQeXVJNWFtRU05aTQxaFlhbXJKL2U2dTNUbkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZvbWdlY2ZBbTQ3SThKV24rMFNVWU9GbHRYQmk0SWRyeUQydzZVVUdGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2NUWDFNRjc5YVkwVEtaUXAyYXFTS2t6QkVmUjlWcVZWZm9TVHJ5YWxDST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVvTEY0NXdTblNqa3FoK2NKb3BzcGR4cG9OZUdtc2NkWGlHaVVmUmdYYmlwZWl1RVhGcWtxUCtwWHBQYlA3YUcvd09lR3FnYWNIaDhrRkEvSVJZM0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJEb1FlU2dDYzdPblVuQ3FGQldjRGpEYkVOQ1FScHoxaGlQYm5rVWVlc3dZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDb19faUN3YVRjQ3BEZGMwUHBCajdRIiwicGhvbmVJZCI6ImVkZGE4OTUxLWYwYTktNDJkOC1iODk0LTVjN2UxNDIzMzM2NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpMXVBQUcvYXRhT0hTanNLK1dFc2lKUWxFVVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGJ2dTc3Rk1HVW9Rc3FVdG5zQmIwMkwwNUZJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxSRkpTWVFUIiwibWUiOnsiaWQiOiIyNTU2NzQ0Nzc5MDg6NDRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rTnpma0ZFTlNHb3JRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZ1VU5PRS9icmxpNkhsUW9qcmpKcFNGcnhGYngzakQwSUpBVThyWGorU2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpPMDZUU3A0SHhvVEZ5ODk5NjhsOTJBR3VSekRDaXhzdDdLRjVZTitkLzNvOU9jd0QzVkR4RUtNZHlVSUFzbFZQRHUzYXZ4VDdRZExMM0M4QUNQSEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyL3JYb0o2cC9XZDRqTzFKelVSS0cyN3hzZGJVWkpMRDlTS05YYW9wclh5L3VadkVRY0ZlUHgzN041N2FnajIrSzFOdTJ5TTFhamhSNEVHRmJidHBBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY3NDQ3NzkwODo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlcmxEVGhQMjY1WXVoNVVLSTY0eWFVaGE4Ulc4ZDR3OUNDUUZQSzE0L2tuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjIyNTYwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1PYiJ9  "
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "ℝ𝕚𝕔𝕙𝕒𝕣𝕕",
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
