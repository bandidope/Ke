import axios from 'axios'

let handler = async (m, { conn, args}) => {
  if (!args[0]) throw `
╭─❍ *🔥 RETO 16 VS 16 | Arceus'  Bot 👾*
│
│⏳ *Horario:*
│🇲🇽 MÉXICO:
│🇨🇴 COLOMBIA:
│
│🎮 *Modalidad:*
│👥 *Jugadores:* 16 VS 16
│
│🏆 *Escuadra 1:*
│   👑 •
│   🥷🏻 • (3 espacios)
│
│🏆 *Escuadra 2:*
│   👑 •
│   🥷🏻 • (3 espacios)
│
│🏆 *Escuadra 3:*
│   👑 •
│   🥷🏻 • (3 espacios)
│
│🏆 *Escuadra 4:*
│   👑 •
│   🥷🏻 • (3 espacios)
│
│🔄 *Suplentes:*
│   🥷🏻 •
╰────────────────────❍
`

  const encabezados = [
    "⚡ INVOCACIÓN DE BATALLA | Arceus'  Bot",
    "🎖️ RETO MULTIESCUADRA ACTIVADO",
    "🔥 COMBATE TOTAL | 16 VS 16"
  ]
  
  const imgOficial = "https://o.uguu.se/MJVbgdQD.jpg"
  const titulo = encabezados[Math.floor(Math.random() * encabezados.length)]

  let thumbBuffer
  try {
    const res = await axios.get(imgOficial, { responseType: 'arraybuffer'})
    thumbBuffer = Buffer.from(res.data)
  } catch (err) {
    thumbBuffer = Buffer.from('')
  }

  const keistopMsg = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      orderMessage: {
        itemCount: 16,
        status: 1,
        message: titulo,
        footerText: "Arceus'  Bot 👾",
        thumbnail: thumbBuffer,
        surface: 2,
        sellerJid: "0@s.whatsapp.net"
      }
    }
  }

  await conn.sendMessage(m.chat, {
    image: { url: imgOficial },
    caption: `╭─❍ *🔥 16 VS 16 | Arceus'  Bot*
│
│⏳ *Horario:*
│🇲🇽 MÉXICO: ${args[0]}
│🇨🇴 COLOMBIA: ${args[0]}
│
│🎮 *Modalidad:*
│👥 *Jugadores:* 16 VS 16
│
│🏆 *Escuadra 1:*
│   👑 • 
│   🥷🏻 •    🥷🏻 •    🥷🏻 • 
│
│🏆 *Escuadra 2:*
│   👑 • 
│   🥷🏻 •    🥷🏻 •    🥷🏻 • 
│
│🏆 *Escuadra 3:*
│   👑 • 
│   🥷🏻 •    🥷🏻 •    🥷🏻 • 
│
│🏆 *Escuadra 4:*
│   👑 • 
│   🥷🏻 •    🥷🏻 •    🥷🏻 • 
│
│🔄 *Suplentes:*
│   🥷🏻 •    🥷🏻 • 
│
│👾 *𝐁𝐲: Arceus'  Bot*
╰────────────────────❍

📢 *Canal:* https://whatsapp.com/channel/0029Vb7aYAQJkK7F00EIzB1l`,
    mentions: []
}, { quoted: keistopMsg })
}

handler.help = ['16vs16']
handler.tags = ['freefire']
handler.command = /^(vs16|16vs16)$/i
handler.group = true
handler.admin = false

export default handler
