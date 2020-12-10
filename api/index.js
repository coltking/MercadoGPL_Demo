const server = require('./src/app.js')
require('dotenv').config()



server.listen(process.env.PORT || 3000, () => {
    console.log('Escuchando el puerto '+process.env.PORT + '.')
})

