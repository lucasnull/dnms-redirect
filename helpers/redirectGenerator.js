const fs = require("fs");
const files = fs.readdirSync("./redirects")

module.exports = () => {
    return async () => {
        return files.map(file => {
            const definition = require(`../redirects/${file}`)
            const source = normalize(definition.source)

            return {
                source: source,
                destination: definition.destination,
                basePath: false,
                permanent: false,
            }
        })
    }
}

function normalize(route) {
    if (route[0] === '/') return route
    return `/${route}`
}