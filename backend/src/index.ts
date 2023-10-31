import express from 'express'
import config from 'config'

import connection from "./utils/connection.js";
import logger from "./utils/logger.js";
import routes from "./routes/index.js";

const app = express()
const PORT = config.get('port')
app.use(express.json())
app.use(routes)

async function init(){
    try {
        await connection()
        app.listen(PORT,()=> logger.info('Listening at port ' + PORT))
    }catch (e) {
        console.log('error ocurred', e)
    }
}
init()
