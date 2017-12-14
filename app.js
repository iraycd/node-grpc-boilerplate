import config from 'config'

const seviceName = config.get('name')
let message = seviceName + ' Running on Port'

console.log(message)
