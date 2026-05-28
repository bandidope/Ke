import fg from 'api-dylux' 
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
Owners / Vendedores McQueen ⚡ 

Owner:
: ̗̀➛ 👑 Whois : Wa.me/51936994155

Vendedores:
: ̗̀➛ 👸🏻 Melisa : Wa.me/51993800613

Grupo Oficial:
: ̗̀➛ https://chat.whatsapp.com/Fi6FHZ8VSGnAT7CKJkcd9r
                 
` 
}
handler.help = ['comprar']
handler.tags = ['Arceus']
handler.command = /^(comprar)$/i
handler.group = false
handler.admin = false
export default handler