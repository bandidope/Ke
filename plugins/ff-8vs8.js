import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args}) => {
  if (!args[0]) throw `
╭━━━〔 ⚔️ *ARCEUS' VERSUS* ⚔️ 〕━━━┓
┃
┃ ⏳ *HORARIO:*
┃ 🇲🇽 MÉXICO: 
┃ 🇨🇴 COLOMBIA: 
┃
┃ 🎮 *MODALIDAD:*
┃ 👥 *JUGADORES:* 8 VS 8
┃
┃ 🏆 *ESCUADRA A:*
┃    👑 • 
┃    ⚡ • 
┃    ⚡ • 
┃    ⚡ • 
┃
┃ 🏆 *ESCUADRA B:*
┃    👑 • 
┃    ⚡ • 
┃    ⚡ • 
┃    ⚡ • 
┃
┃ 🔄 *RESERVAS:*
┃    👤 • 
┃    👤 • 
┃
┗━━━━━━━━━━━━━━━━━━━━━━━┛
`

  const textos = [
    "👾 Arceus'  Bot: DOMINIO TOTAL",
    "⚔️ DUELO DE TITANES ACTIVADO",
    "🚀 SYSTEM KEISTOP: CONFLICTO 8VS8"
  ]
  
  // Imagen oficial para todo el sistema
  const imgOficial = "https://o.uguu.se/MJVbgdQD.jpg"

  const titulo = textos[Math.floor(Math.random() * textos.length)]
  
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
        itemCount: 2026,
        status: 1,
        message: titulo,
        footerText: "Arceus'  Bot 👾",
        thumbnail: thumbBuffer,
        surface: 2,
        sellerJid: "0@s.whatsapp.net"
      }
    }
  }

  const caption = `
┏━━━━〔 👾 *KEISTOP' 8 VS 8* 👾 〕━━━┓
┃
┃ ⏳ *HORARIOS:*
┃ 🇲🇽 MÉXICO: ${args[0]}
┃ 🇨🇴 COLOMBIA: ${args[0]}
┃
┃ 🎮 *MODALIDAD:*
┃ 👥 *JUGADORES:* 8 VS 8
┃
┃ 🔱 *ESCUADRA 1:*
┃    👑 • 
┃    ⚔️ • 
┃    ⚔️ • 
┃    ⚔️ • 
┃
┃ 🔱 *ESCUADRA 2:*
┃    👑 • 
┃    ⚔️ • 
┃    ⚔️ • 
┃    ⚔️ • 
┃
┃ 🚀 *SUPLENTES:*
┃    👾 • 
┃    👾 • 
┃
┃ 👾 *𝐁𝐲: Arceus'  Bot*
┗━━━━━━━━━━━━━━━━━━━━━━━┛

📢 *Canal:* https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0ml`.trim()

  await conn.sendMessage(m.chat, {
    image: { url: imgOficial },
    caption: caption,
    mentions: []
  }, { quoted: keistopMsg })
}

handler.help = ['8vs8']
handler.tags = ['freefire']
handler.command = /^(vs8|8vs8|masc8)$/i
handler.group = true
handler.admin = false

export default handler
