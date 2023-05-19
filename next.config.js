const redirectGenerator = require("./helpers/redirectGenerator")

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  redirects: redirectGenerator()
}

module.exports = nextConfig
