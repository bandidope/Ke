const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join``;
  const oi = `${pesan}`;
  let emot = `${pickRandom(['𝗕𝗼𝘁'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
  let teks = `╭─────────\n│❏ 𝗧𝗲 𝗘𝘀𝘁𝗮 𝗜𝗻𝘃𝗼𝗰𝗮𝗻𝗱𝗼 𝗣𝘂𝘁𝗶𝘁𝗮 🤖\n│❏ ${emot}v𝗟𝗼𝘃𝗲𝗿𝘀: *${participants.length}* ${oi}\n│❏ 𝗕𝗼𝘁\n│\n`;
  for (const mem of participants) {
    teks += `│🌀 @${mem.id.split('@')[0]}\n`;
  }
  teks += `│\n╰Pᴏᴡᴇʀᴇᴅ Bʏ Tᴇᴀᴍ Nɪɢʜᴛᴡɪsʜ 🌀`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;