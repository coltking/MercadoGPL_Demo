const server = require('./src/app.js')
require('dotenv').config()



server.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto '+process.env.PORT)
})

