import { readFileSync } from 'fs';
import { join } from 'path';

const handler = async (m, { isOwner, isAdmin, conn, text, participants, args }) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }

  try {
    const chat = global.db.data.chats[m.chat] || {};
    const emoji = chat.emojiTag || '⚡';
    const customMessage = args.join(' ');
    const groupMetadata = await conn.groupMetadata(m.chat);
    const groupName = groupMetadata.subject;

    // Ruta de la imagen local
    const localImg = readFileSync(join(process.cwd(), 'storage', 'img', 'catalogo.png'));

    const countryFlags = {
      '1': '🇺🇸', '44': '🇬🇧', '33': '🇫🇷', '49': '🇩🇪', '34': '🇪🇸', '55': '🇧🇷', 
      '52': '🇲🇽', '54': '🇦🇷', '57': '🇨🇴', '51': '🇵🇪', '56': '🇨🇱', '58': '🇻🇪', 
      '502': '🇬🇹', '503': '🇸🇻', '504': '🇭🇳', '505': '🇳🇮', '506': '🇨🇷', '507': '🇵🇦', 
      '591': '🇧🇴', '593': '🇪🇨', '595': '🇵🇾', '598': '🇺🇾', '53': '🇨🇺'
    };

    const getCountryFlag = (id) => {
      const num = id.split('@')[0];
      if (num.startsWith('1')) return '⚡';
      const p2 = num.substring(0, 2);
      const p3 = num.substring(0, 3);
      return countryFlags[p3] || countryFlags[p2] || '👤';
    };

    // --- DISEÑO RENOVADO 𝐊𝐄𝐈𝐒𝐓𝐎𝐏' 𝐁𝐎𝐓 ---
    let messageText = `╔══✦ *CONVOCATORIA GENERAL* ✦══╗\n║\n`;
    messageText += `║ 🛡️ *Grupo:* ${groupName}\n`;
    messageText += `║ 👥 *Miembros:* ${participants.length}\n`;

    if (customMessage) {
      messageText += `║ 📢 *Mensaje:* ${customMessage}\n`;
    }

    messageText += `║\n╠══✦ *NOTIFICANDO USUARIOS* ✦══\n║\n`;

    for (const mem of participants) {
      messageText += `║ ${emoji} ${getCountryFlag(mem.id)} @${mem.id.split('@')[0]}\n`;
    }

    messageText += `║\n╚══✦ *⚡ 𝗠𝗰𝗤𝘂𝗲𝗲𝗻 𝗕𝗼𝘁  ⚡✦══╝`;

    // Miniatura para el mensaje (usando el buffer local)
    const fkontak = {
      key: { 
        participants: "0@s.whatsapp.net", 
        remoteJid: "status@broadcast", 
        fromMe: false, 
        id: "𝗠𝗰𝗤𝘂𝗲𝗲𝗻 𝗕𝗼𝘁" 
      },
      message: {
        locationMessage: {
          name: "*⚡ 𝗠𝗰𝗤𝘂𝗲𝗲𝗻 𝗕𝗼𝘁  ⚡",
          jpegThumbnail: localImg
        }
      }
    };

    await conn.sendMessage(m.chat, {
      image: localImg, // Imagen local
      caption: messageText,
      mentions: participants.map(a => a.id)
    }, { quoted: fkontak });

  } catch (e) {
    console.error(e);
    await conn.reply(m.chat, '❌ Error al ejecutar la convocatoria. Verifica la imagen local.', m);
  }
};

handler.help = ['todos'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;

handler.admin = true; 
handler.group = true;

export default handler;
