import fg from 'api-dylux'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, command, usedPrefix}) => {
  if (!args[0]) throw `
╭─❍ *👾 RETO 4 VS 4 👾*
│
│⏳ *Horario:*
│🇲🇽 MÉXICO:
│🇨🇴 COLOMBIA:
│
│🎮 *Modalidad:*
│👥 *Jugadores:*
│
│🏆 *Escuadra 1:*
│   👑 •
│   🥷🏻 •
│   🥷🏻 •
│   🥷🏻 •
│
│🧱 *Suplentes:*
│   🥷🏻 •
│   🥷🏻 •
╰───────────────❍
`

  const fkontak = {
    key: {
      participant: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'KeistopVS'
    },
    message: {
      locationMessage: {
        name: 'Arceus\'  Bot 👾',
        jpegThumbnail: await (await fetch('https://o.uguu.se/MJVbgdQD.jpg')).buffer(),
        vcard:
          'BEGIN:VCARD\n' +
          'VERSION:3.0\n' +
          'N:;Keistop;;;\n' +
          'FN:Arceus\'  Bot\n' +
          'ORG:Arceus\' 𝐂𝐨𝐦𝐮𝐧𝐢𝐭𝐲\n' +
          'TITLE:\n' +
          'item1.TEL;waid=51936994155:+51 936 994 155\n' +
          'item1.X-ABLabel:KeistopBot\n' +
          'X-WA-BIZ-DESCRIPTION:Sistema oficial de Arceus\'  Bot\n' +
          'X-WA-BIZ-NAME:Arceus\'  Bot\n' +
          'END:VCARD'
      }
    }
  }

  await conn.sendMessage(m.chat, {
    text: '🎯 *Reto grupal activo | Arceus\'  Bot 👾*',
  }, { quoted: fkontak })

  await conn.sendMessage(m.chat, {
    image: { url: 'https://o.uguu.se/MJVbgdQD.jpg' },
    caption: `╭─❍ *4 VS 4 | RETO* 🔥
│
│⏳ *Horario:*
│🇲🇽 MÉXICO: ${args[0]}
│🇨🇴 COLOMBIA: ${args[0]}
│
│🎮 *Modalidad:*
│👥 *Jugadores:*
│
│🏆 *Escuadra 1:*
│   👑 • 
│   🥷🏻 • 
│   🥷🏻 • 
│   🥷🏻 • 
│
│🧱 *Suplentes:*
│   🥷🏻 • 
│   🥷🏻 • 
│
│👾 *𝐁𝐲: Arceus'  Bot*
╰───────────────❍

📢 *Canal:* https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0ml`,
    mentions: []
  }, { quoted: fkontak })
}

handler.help = ['4vs4']
handler.tags = ['freefire']
handler.command = /^(vs4|4vs4|masc4)$/i
handler.group = true

export default handler
