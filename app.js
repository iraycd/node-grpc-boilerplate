import config from 'config'
import Mali from 'mali'
import logger from 'mali-logger'
import RouteConfig from './src/route'

const SERVICE_NAME = config.get('name')
const HOST = config.get('host')
const PORT = config.get('port')
const HOSTPORT = `${HOST}:${PORT}`
let app

const SAMPLE_PROTO = `./proto/sample.proto`

function main () {
  app = new Mali(SAMPLE_PROTO)

  app.use(logger())

  RouteConfig(app)

  app.start(HOSTPORT)
  console.log(`${SERVICE_NAME} running @ ${HOSTPORT}`)
}

async function shutdown (err) {
  if (err) console.error(err)
  await app.close()
  process.exit()
}

process.on('uncaughtException', shutdown)
process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

main()
