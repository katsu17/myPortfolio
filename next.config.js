/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    STATIC_FORMS_ACCESS_KEY: process.env.STATIC_FORMS_ACCESS_KEY,
  },
}
