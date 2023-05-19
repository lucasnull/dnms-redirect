const shareByWhatsapp = require("../helpers/shareByWhatsapp")

const baseText = "Acompanhe a DinamusTV ao vivo:"
const share = (youtube) => shareByWhatsapp(`${baseText} ${youtube}`)

module.exports = {
    source: "compartilhar-live",
    destination: share("https://www.youtube.com/@DinamusTV")
}
