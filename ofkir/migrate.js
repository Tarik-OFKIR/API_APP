const db = require('./models')
async function migrate() {
    await db.sequelize.sync({ force: false, alter: true })
    console.log("Done")
}
migrate()