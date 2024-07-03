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
global.owner = process.env.OWNER_NUMBER || "+255674477908";
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
  "   eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Z6YVFYWURhdy95WFllOTliWW5hMXo1NTlaTXNCcjlXdXJHTmJUZjAxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGxycmtaWDdZYXR2SGg0VzFkUTBrT0c0M3I3MlRWTjlGRkVMWEtla04zaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSHYvRTlnN2tQSHowWEJWY2xzaGh5VWZlWTEyL1dISHR5UTZEOVBkdzEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJObGVsV0xxMXhYa2MrbThDWEZ4bjBlMkN0NitabG16L29mTVV6ZjQydzNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JQ3hWNWxJdmpESE9wZXRUTkNlMzR1dzlwQUdwZ09XakhFWU4reFRqMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJuWUF3NmVna2FiaFhJcnBXMVgzWTlEQmFlQ1h1YVFNdzRJTGQ4L2ViV009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJyKytjck52aWY1c1hERDlYVjh6K3ZwcXdSa1M3Vko1TXFvNDNwclBVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFNKQXhUd0tXU0dGd3MvVHBPNU02K2U2S1c0OXhwSlJ3dHFYMVhlTmpUUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJZeVRJcnhTelljZ3dIZ1R5VmdVL0h5cmQxaDdQMlppdDlxVXFpeEdIcU1qQVdjVGM5eEhRdW1aN2cxVHdrYkQrTG9vQ3ZsN0x3Z0ZBbUhuZkxqUURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6Ino1V3E2ZVBRcHBpRmt1UXo1TXlUNm92K1RwQmkwK3U0RXpyZ0JPYUhFVms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJINXRFZHBEU3R5bUdjZ3BlQ1RnSnciLCJwaG9uZUlkIjoiOGRlOGNlNDYtY2EyOC00YjllLWFhN2MtM2Q4MWQ5OTUxYmQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9RU1ZxSlVNN2R1Znp0dlZZT2dHMjVzMUc3Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3YnpYWVFaNW9Uc3dMV1BZSGVvQVlTY01zdTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjdQSEEyNzUiLCJtZSI6eyJpZCI6IjI1NTY3NDQ3NzkwODoyNUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnFOemZrRkVOeUJsYlFHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNnVVTk9FL2JybGk2SGxRb2pyakpwU0ZyeEZieDNqRDBJSkFVOHJYaitTYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRUNiT096K1lnWURoYjNPUVk5N0cvMGN0c210eWdYam9wYVZRUnQ0a1hlejhrQWpJaFNteHpEZFpzYy9pRmw5bi93QkxTazQ3K0t0ZVdtZFF0RHhiQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Ilc2OVN2OGlhdEpJS3ZadDFWTkxJdFVDV3ZqeWlCK0Q0SXM1cGR4cGZ2eUlHMjlsY2dNeHN0eTNHVE4zL05vTzEvVkR2aEVvVVpSWlZ5NUQ1YWRUVkFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Njc0NDc3OTA4OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVybERUaFAyNjVZdWg1VUtJNjR5YVVoYThSVzhkNHc5Q0NRRlBLMTQva24ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAwMDg5MzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWhpIn0= "
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "𝐑𝐈𝐂𝐇𝐀𝐑𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "𝐑𝐈𝐂𝐇𝐀𝐑𝐃(𝐄𝐦𝐞𝐫𝐢𝐭𝐮𝐬)🇹🇿",
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
