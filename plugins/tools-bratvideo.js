            case 'bratv': {
                text = m.quoted?.text || text
                if (!text) return conn.sendMessage(m.chat, {
                    text: `> . ﹡ ﹟ 🖤 ׄ ⬭ *¡ʙʀᴀᴛ ᴀɴɪᴍᴀᴅᴏ!*

*ㅤꨶ〆⁾ ㅤׄㅤ⸼ㅤׄ *͜🖤* ㅤ֢ㅤ⸱ㅤᯭִ*

ׅㅤ𓏸𓈒ㅤׄ *ᴜsᴏ* :: \`#bratv (texto)\`
ׅㅤ𓏸𓈒ㅤׄ *ᴇᴊᴇᴍᴘʟᴏ* :: \`#bratv hola mundo\`
ׅㅤ𓏸𓈒ㅤׄ *ɴᴏᴛᴀ* :: ɢᴇɴᴇʀᴀ ꜱᴛɪᴄᴋᴇʀ ᴀɴɪᴍᴀᴅᴏ

> . ﹡ ﹟ ⚡ ׄ ⬭ *ᴀsᴛᴀ-ʙᴏᴛ-ᴍᴅ*`.trim(),
                    contextInfo: { ...rcanal }
                }, { quoted: m })
                await m.react('🕒')
                const videoBuffer = await fetchStickerVideo(text)
                const stickerBuffer = await sticker(videoBuffer, null, texto1, texto2)
                await conn.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m })
                await m.react('✔️')
                break
            }
