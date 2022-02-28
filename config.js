// The dotenv module ensures that this can be used (see loader express.js)

module.exports = {
    PORT: process.env.PORT,
    DB: {
      PGHOST: process.env.PGHOST,
      PGUSER: process.env.PGUSER,
      PGDATABASE: process.env.PGDATABASE,
      PGPASSWORD: process.env.PGPASSWORD,
      PGPORT: process.env.PGPORT
    },
    SESSION_SECRET: process.env.SESSION_SECRET
  }