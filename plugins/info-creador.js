import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    await m.react('☕');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "Whois Yallico⚡",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: Whois Yallico⚡
\nitem1.TEL;waid=51936994155:51936994155\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: antvniaaax7@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/whois.yallico\nitem3.X-ABLabel:Internet\nitem4.ADR:;; Perú 🇵🇪;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'Hello, I am the official creator of whois.',
                body: dev,
                thumbnailUrl: 'https://files.evogb.win/IqqYi2.jpeg',
                sourceUrl: 'https://wa.me/51936994155?text=Hola+quiero+adquirir+bot',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\` este es*\n*el contacto de mi desarrollador*`;

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;