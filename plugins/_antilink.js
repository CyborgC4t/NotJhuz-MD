let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*π½πΎ ππ΄ πΏππ΄π³πΎ π΄π»πΈπΌπΈπ½π°π, π΄ππ΄π π°π³πΌπΈπ½*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*γ Corra Membro comum, O ban estΓ‘ prΓ³ximo... γ*\n*${await this.getName(m.sender)} π½πΎπ ππ΄πΌπΎπ :)*${isBotAdmin ? '' : '\n\n*[βππππβ] π΄π» π±πΎπ π½π΄π²π΄ππΈππ° ππ΄π π°π³πΌπΈπ½πΈππππ°π³πΎπ*'}`, author, ['π³π΄ππ°π²ππΈππ°π π°π½ππΈπ»πΈπ½πΊπ', '/ttp you are an idiot  πππ'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[βππππβ] π΄π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ π½πΎ ππΈπ΄π½π΄ π·π°π±πΈπ»πΈππ°π³πΎ π»π°π ππ΄ππππΈπ²π²πΈπΎπ½π΄π (#ππππππ ππππππππ) π²πΎπ½ππ°π²ππ΄ π²πΎπ½ π΄π» πΏπ°ππ° πππ΄ π»πΎ π·π°π±πΈπ»πΈππ΄*')
}
return !0
}
