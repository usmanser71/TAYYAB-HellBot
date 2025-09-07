// 📂 menu.js
// 🌟 Full Stylish Global Menu — TAYYAB HELL-MD

const more = String.fromCharCode(8206)
const readMore = more.repeat(2001)
const moment = require('moment-timezone')

// Dynamic date, time & uptime
const date = moment().tz('Asia/Karachi').format('DD-MMM-YYYY')
const time = moment().tz('Asia/Karachi').format('hh:mm A')
const uptimeSec = process.uptime()
const hours = Math.floor(uptimeSec / 3600)
const minutes = Math.floor((uptimeSec % 3600) / 60)
const seconds = Math.floor(uptimeSec % 60)
const uptimeStr = `${hours}h ${minutes}m ${seconds}s`

// Status box to show at menu start & each category start
const statusBox = `
╭━━〔𓆩مسٹــــࣻ͢ــــر عُــثــــࣻ͢ــــمَـــان 𓆪〕━╮
┃ 🔥 Mode: PRIVATE | FULL POWER
┃ 💀 Status:PROTOCOL ACTIVE
┃ 👑 Owner: 𓆩𝐔𝐒𝐌𝐀𝐍 𝐒𝐄𝐑𓆪 ☠️
┃ ⚡ Version: 6.6.6 (Hell Build)
┃ ⏳ Uptime: ${uptimeStr}
┃ 📅 Date: ${date}
┃ 🕒 Time: ${time}
┃ 📌 Commands: 222+ Loaded
┃ 📱 Device: ANDROID-HELLCORE
╰━━━━━━━━━━━━━━━━━╯
`

global.menu = `
${statusBox}
╔═══❖•⊰ *USMAN-SER ALL MENU* ⊱•❖═══╗
║◈ .menu
║◈ .menuowner
║◈ .downloadmenu
║◈ .groupmenu
║◈ .automenu
║◈ .aimenu
║◈ .githubmenu
║◈ .logomenu
║◈ .toolsmenu
║◈ .textmenu
║◈ .utilitymenu
║◈ .exploitsmenu
║◈ .photomenu
║◈ .reactmenu
║◈ .gamemenu
║◈ .funmenu
║◈ .animemenu
╚═══════════════╝
${readMore}

╔═══❖•⊰ 👑 OWNER MENU ⊱•❖═══╗
║1. Self ✅
║2. Public ✅
║3. Block ✅
║4. Nice ✅
║5. Repo ✅
║6. Restart ✅
║7. Shutdown ✅
║8. Setbio ✅
║9. Setname ✅
║10. Setpp ✅
║11. Save ✅
║12. Join ✅
║13. Leave ✅
║14. Delaymsg ✅
║15. Numinfo ✅
║16. Del ✅
║17. Reactch ✅
║18. Idcheck ✅
╚════════════════╝
${readMore}

╔═══❖•⊰ 📥 DOWNLOAD MENU ⊱•❖═══╗
║1. Video ✅
║2. Video2 ✅
║3. MediaFire ✅
║4. Song ✅
║5. Song2 ✅
║6. Play ✅
║7. Gitclone ✅
║8. TikTok ✅
║9. Insta ✅
║10. FB ✅
║11. IMG ✅
║12. APK ✅
║13. Ytmp4 ✅
║14. Ytmp3 ✅
╚══════════════╝
${readMore}

╔═══❖•⊰ 🤖 AUTO MENU ⊱•❖═══╗
║1. Antilink ✅
║2. Antilinkick ✅
║3. Antibug ✅
║4. Antidelete ✅
║5. Autostatus ✅
║6. Autoreact ✅
║7. AutoGreet ✅
║8. AutoTyping ✅
║9. Autorecording ✅
║10. Autoread ✅
╚═══════════════╝
${readMore}

╔═❖•⊰ ⚡ AI MENU ⊱•❖═╗
║1. Chatgpt ✅
║2. LLama ✅
║3. Claude ✅
║4. Mistral ✅
╚════════════════╝

${readMore}

╔═══❖•⊰ 👥 GROUP MENU ⊱•❖═══╗
║1. Kick ✅
║2. Add ✅
║3. Kickall ✅
║4. Open ✅
║5. Close ✅
║6. Tagall ✅
║7. Tagadmin ✅
║8. Hidetag ✅
║9. Listactive ✅
║10. Changename ✅
║11. Closetime ✅
║12. Ginfo ✅
║13. Warn ✅
║14. Gpp ✅
║15. Promote ✅
║16. Demote ✅
║17. Promoteall ✅
║18. Demoteall ✅
║19. Adminkill ✅
║20. Leave ✅
╚══════════════╝
${readMore}

╔═❖•⊰ 💻 GITHUB MENU ⊱•❖═╗
║1. GitHub ✅
║2. Gitclone ✅
║3. Gitrepos ✅
║4. Gitfollowers ✅
║5. Gitstarred ✅
║6. Gitfollow ✅
╚═══════════════╝
${readMore}

╔═❖•⊰ 🎨 LOGO MENU ⊱•❖╗
║1. Logo ✅
║2. d3comic ✅
║3. Dragonball ✅
║4. Deadpool ✅
║5. Blackpink ✅
║6. Neonlight ✅
║7. Cat ✅
╚═════════╝
${readMore}

╔═══❖•⊰ 🛠️ TOOLS MENU ⊱•❖═══╗
║1. Readmore ✅
║2. Nice ✅
║3. Say ✅
║4. TTE ✅
║5. Calc ✅
║6. Poll ✅
║7. Hack ✅
║8. Matrix ✅
║9. Fancy ✅
║10. Cpp ✅
║11. Insult ✅
║12. Harami ✅
║13. Shapar ✅
║14. Heart ✅
║15. Checkme ✅
╚═══════════════╝
${readMore}

╔══❖•⊰ ✍️ TEXT EFFECT ⊱•❖══╗
║1. Fliptext ✅
║2. Smallcaps ✅
║3. Zalgo ✅
║4. Zalgo2 ✅
║5. Bubble ✅
║6. Strike ✅
║7. Reverse ✅
║8. Mirror ✅
║9. Animal ✅
║10. TTE ✅
╚════════════════╝
${readMore}

╔═══❖•⊰ ⚙️ UTILITY MENU ⊱•❖═══╗
║1. Ping ✅
║2. Alive ✅
║3. Runtime ✅
║4. Owner ✅
║5. Botname ✅
║6. Intro ✅
║7. Channel ✅
║8. Info ✅
║9. Help ✅
╚═════════════════╝
${readMore}

╔═══❖•⊰ 💀 EXPLOITS MENU ⊱•❖═══╗
║1. Xray ✅
║2. Disk ✅
║3. Ghostping ✅
║4. Rootme ✅
║5. Numinfo ✅
║6. Adminkill ✅
║7. Weather ✅
╚══════════════════╝
${readMore}

╔═══❖•⊰ 🖼️ PHOTO MENU ⊱•❖═══╗
║1. Art ✅
║2. Wallpaper ✅
║3. Gamewallpaper ✅
║4. Cyber ✅
║5. Gremory ✅
║6. Hacker ✅
║7. Hestia ✅
║8. Jibril ✅
║9. Rose ✅
║10. Technology ✅
║11. Pubg ✅
║12. FreeFire ✅
║13. Mountain ✅
║14. Islamic ✅
║15. Dog ✅
║16. Imgcat ✅
╚════════════════╝
${readMore}

╔═══❖•⊰ 💫 REACTION MENU ⊱•❖═══╗
║1. Kill ✅
║2. Pat ✅
║3. Cry ✅
║4. Hug ✅
║5. Kiss ✅
║6. Slap ✅
║7. Sad ✅
║8. Bite ✅
║9. Baka ✅
║10. Smile ✅
║11. Love ✅
╚═══════════════╝
${readMore}

╔═══❖•⊰ 🎮 GAME MENU ⊱•❖═══╗
║1. Tictactoe ✅
║2. Rps ✅
║3. Flag ✅
║4. Math ✅
║5. Guessnumber ✅
║6. Scramble ✅
║7. Riddle ✅
║8. Emoji ✅
╚═══════════════╝
${readMore}

╔═══❖•⊰ 🎉 FUN MENU ⊱•❖═══╗
║1. Joke ✅
║2. Meme ✅
║3. Anime ✅
║4. Quote ✅
║5. Truthordare ✅
║6. EightBall ✅
║7. Roast ✅
║8. Fact ✅
║9. Historyfact ✅
║10. Captions ✅
║11. Trivia ✅
╚═══════════════╝
${readMore}

╔═══❖•⊰ 🎎 ANIME MENU ⊱•❖═══╗
║1. Waifu ✅
║2. Neko ✅
║3. Neko2 ✅
║4. Akiyama ✅
║5. Asuna ✅
║6. Ayuzawa ✅
║7. Boruto ✅
║8. Ana ✅
║9. Art ✅
║10. BTS ✅
║11. Cartoon ✅
║12. Chiho ✅
║13. Chitoge ✅
║14. Cosplay ✅
║15. Cosplayloli ✅
║16. Cosplaysagiri ✅
║17. Cyber ✅
║18. Deidara ✅
║19. Doraemon ✅
║20. Elaina ✅
║21. Emilia ✅
║22. Erza ✅
║23. Exo ✅
║24. Gamewallpaper ✅
║25. Hinata ✅
║26. Husbu ✅
║27. Itachi ✅
║28. Itachiuchiha ✅
║29. Itori ✅
║30. Jsj ✅
║31. Mikasa ✅
║32. Nezuko ✅
║33. Yumeko ✅
║34. Zerotwo ✅
║35. Kitsune ✅
║36. Kurumi ✅
║37. Blush ✅
║38. Rem ✅
║39. Animehug ✅
║40. Animekiss ✅
║41. Cuddle ✅
║42. Animegirl ✅
║43. Shinobu ✅
║44. Megumin ✅
║45. Luffy ✅
╚═════════════════╝
*『𝙄𝙛 𝙮𝙤𝙪 𝙘𝙖𝙣'𝙩 𝙝𝙖𝙣𝙙𝙡𝙚 𝙩𝙝𝙚 𝙝𝙚𝙖𝙩... 𝙙𝙤𝙣'𝙩 𝙩𝙤𝙪𝙘𝙝 𝙩𝙝𝙚 𝙛𝙞𝙧𝙚. 🔥*
*𝙎𝙞𝙜𝙣𝙞𝙣𝙜 𝙤𝙛𝙛 𝙬𝙞𝙩𝙝 𝙖 𝙗𝙪𝙧𝙣... 𝙩𝙝𝙞𝙨 𝙞𝙨 𝙃𝙀𝙇𝙇. 🚀』*
${readMore}
`


// 📂 menu.js
// 🌟 Full Stylish Global Menus — 𓆩مسٹــــࣻ͢ــــر عُــثــــࣻ͢ــــمَـــان 𓆪

// ================== OWNER MENU ==================
global.ownermenu = `
${statusBox}
╔══❖•⊰ 👑 OWNER MENU ⊱•❖══╗
║1. Self ✅
║2. Public ✅
║3. Block ✅
║4. Nice ✅
║5. Repo ✅
║6. Restart ✅
║7. Shutdown ✅
║8. Setbio ✅
║9. Setname ✅
║10. Setpp ✅
║11. Save ✅
║12. Join ✅
║13. Leave ✅
║14. Delaymsg ✅
║15. Numinfo ✅
║16. Del ✅
║17. Reactch ✅
║18. Idcheck ✅
╚══════════════╝
`


// ================== DOWNLOAD MENU ==================
global.downloadmenu = `
${statusBox}
╔══❖•⊰ 📥 DOWNLOAD MENU ⊱•❖══╗
║1. Video ✅
║2. Video2 ✅
║3. MediaFire ✅
║4. Song ✅
║5. Song2 ✅
║6. Play ✅
║7. Gitclone ✅
║8. TikTok ✅
║9. Insta ✅
║10. FB ✅
║11. IMG ✅
║12. APK ✅
║13. Ytmp4 ✅
║14. Ytmp3 ✅
╚═══════════╝
`

// ================== AUTO MENU ==================
global.automenu = `
${statusBox}
╔══❖•⊰ 🤖 AUTO MENU ⊱•❖══╗
║1. Antilink ✅
║2. Antilinkick ✅
║3. Antibug ✅
║4. Antidelete ✅
║5. Autostatus ✅
║6. Autoreact ✅
║7. AutoGreet ✅
║8. AutoTyping ✅
║9. Autorecording ✅
║10. Autoread ✅
╚═══════════════╝
`


// ================== AI MENU ==================
global.aimenu = `
${statusBox}
╔══❖•⊰ ⚡ AI MENU ⊱•❖═╗
║1. Chatgpt ✅
║2. LLama ✅
║3. Claude ✅
║4. Mistral ✅
╚═════════╝
`

// ================== GROUP MENU ==================
global.groupmenu = `
${statusBox}
╔═❖•⊰ 👥 GROUP MENU ⊱•❖══╗
║1. Kick ✅
║2. Add ✅
║3. Kickall ✅
║4. Open ✅
║5. Close ✅
║6. Tagall ✅
║7. Tagadmin ✅
║8. Hidetag ✅
║9. Listactive ✅
║10. Changename ✅
║11. Closetime ✅
║12. Ginfo ✅
║13. Warn ✅
║14. Gpp ✅
║15. Promote ✅
║16. Demote ✅
║17. Promoteall ✅
║18. Demoteall ✅
║19. Adminkill ✅
║20. Leave ✅
╚═══════════════╝
`


// ================== GITHUB MENU ==================
global.githubmenu = `
${statusBox}
╔═❖•⊰ 💻 GITHUB MENU ⊱•❖═╗
║1. GitHub ✅
║2. Gitclone ✅
║3. Gitrepos ✅
║4. Gitfollowers ✅
║5. Gitstarred ✅
║6. Gitfollow ✅
╚═════════════╝
`

// ================== LOGO MENU ==================
global.logomenu = `
${statusBox}
╔═❖•⊰ 🎨 LOGO MENU ⊱•❖═╗
║1. Logo ✅
║2. d3comic ✅
║3. Dragonball ✅
║4. Deadpool ✅
║5. Blackpink ✅
║6. Neonlight ✅
║7. Cat ✅
╚═════════════╝
`


// ================== TOOLS MENU ==================
global.toolsmenu = `
${statusBox}
╔═❖•⊰ 🛠️ TOOLS MENU ⊱•❖═╗
║1. Readmore ✅
║2. Nice ✅
║3. Say ✅
║4. TTE ✅
║5. Calc ✅
║6. Poll ✅
║7. Hack ✅
║8. Matrix ✅
║9. Fancy ✅
║10. Cpp ✅
║11. Insult ✅
║12. Harami ✅
║13. Shapar ✅
║14. Heart ✅
║15. Checkme ✅
╚═════════════╝
`


// ================== TEXT MENU ==================
global.textmenu = `
${statusBox}
╔═❖•⊰ ✍️ TEXT EFFECT ⊱•❖═╗
║1. Fliptext ✅
║2. Smallcaps ✅
║3. Zalgo ✅
║4. Zalgo2 ✅
║5. Bubble ✅
║6. Strike ✅
║7. Reverse ✅
║8. Mirror ✅
║9. Animal ✅
║10. TTE ✅
╚═══════════╝
`

// ================== UTILITY MENU ==================
global.utilitymenu = `
${statusBox}
╔═❖•⊰ ⚙️ UTILITY MENU ⊱•❖═╗
║1. Ping ✅
║2. Alive ✅
║3. Runtime ✅
║4. Owner ✅
║5. Botname ✅
║6. Intro ✅
║7. Channel ✅
║8. Info ✅
║9. Help ✅
╚════════════╝
`

// ================== EXPLOITS MENU ==================
global.exploitsmenu = `
${statusBox}
╔═❖•⊰ 💀 EXPLOITS MENU ⊱•❖═╗
║1. Xray ✅
║2. Disk ✅
║3. Ghostping ✅
║4. Rootme ✅
║5. Numinfo ✅
║6. Adminkill ✅
║7. Weather ✅
╚══════════╝
`


// ================== PHOTO MENU ==================
global.photomenu = `
${statusBox}
╔❖•⊰ 🖼️ PHOTO MENU ⊱•❖╗
║1. Art ✅
║2. Wallpaper ✅
║3. Gamewallpaper ✅
║4. Cyber ✅
║5. Gremory ✅
║6. Hacker ✅
║7. Hestia ✅
║8. Jibril ✅
║9. Rose ✅
║10. Technology ✅
║11. Pubg ✅
║12. FreeFire ✅
║13. Mountain ✅
║14. Islamic ✅
║15. Dog ✅
║16. Imgcat ✅
╚════════════╝
`

// ================== REACTION MENU ==================
global.reactmenu = `
${statusBox}
╔═❖•⊰ 💫 REACTION MENU ⊱•❖╗
║1. Kill ✅
║2. Pat ✅
║3. Cry ✅
║4. Hug ✅
║5. Kiss ✅
║6. Slap ✅
║7. Sad ✅
║8. Bite ✅
║9. Baka ✅
║10. Smile ✅
║11. Love ✅
╚═══════════╝
`

// ================== GAME MENU ==================
global.gamemenu = `
${statusBox}
╔═══❖•⊰ 🎮 GAME MENU ⊱•❖═══╗
║1. Tictactoe ✅
║2. Rps ✅
║3. Flag ✅
║4. Math ✅
║5. Guessnumber ✅
║6. Scramble ✅
║7. Riddle ✅
║8. Emoji ✅
╚══════════════╝
`


// ================== FUN MENU ==================
global.funmenu = `
${statusBox}
╔═❖•⊰ 🎉 FUN MENU ⊱•❖══╗
║1. Joke ✅
║2. Meme ✅
║3. Anime ✅
║4. Quote ✅
║5. Truthordare ✅
║6. EightBall ✅
║7. Roast ✅
║8. Fact ✅
║9. Historyfact ✅
║10. Captions ✅
║11. Trivia ✅
╚═══════════════╝
`

// ================== ANIME MENU ==================
global.animemenu = `
${statusBox}
╔═══❖•⊰ 🎎 ANIME MENU ⊱•❖═══╗
║1. Waifu ✅
║2. Neko ✅
║3. Neko2 ✅
║4. Akiyama ✅
║5. Asuna ✅
║6. Ayuzawa ✅
║7. Boruto ✅
║8. Ana ✅
║9. Art ✅
║10. BTS ✅
║11. Cartoon ✅
║12. Chiho ✅
║13. Chitoge ✅
║14. Cosplay ✅
║15. Cosplayloli ✅
║16. Cosplaysagiri ✅
║17. Cyber ✅
║18. Deidara ✅
║19. Doraemon ✅
║20. Elaina ✅
║21. Emilia ✅
║22. Erza ✅
║23. Exo ✅
║24. Gamewallpaper ✅
║25. Hinata ✅
║26. Husbu ✅
║27. Itachi ✅
║28. Itachiuchiha ✅
║29. Itori ✅
║30. Jsj ✅
║31. Mikasa ✅
║32. Nezuko ✅
║33. Yumeko ✅
║34. Zerotwo ✅
║35. Kitsune ✅
║36. Kurumi ✅
║37. Blush ✅
║38. Rem ✅
║39. Animehug ✅
║40. Animekiss ✅
║41. Cuddle ✅
║42. Animegirl ✅
║43. Shinobu ✅
║44. Megumin ✅
║45. Luffy ✅
╚═════════════════╝
`
module.exports = {
  menu: global.menu,
  ownermenu: global.ownermenu,
  downloadmenu: global.downloadmenu,
  automenu: global.automenu,
  aimenu: global.aimenu,
  groupmenu: global.groupmenu,
  githubmenu: global.githubmenu,
  logomenu: global.logomenu,
  toolsmenu: global.toolsmenu,
  textmenu: global.textmenu,
  utilitymenu: global.utilitymenu,
  exploitsmenu: global.exploitsmenu,
  photomenu: global.photomenu,
  reactmenu: global.reactmenu,
  gamemenu: global.gamemenu,
  funmenu: global.funmenu,
  animemenu: global.animemenu
}
