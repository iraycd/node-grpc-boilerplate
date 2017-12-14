/* eslint-env jest */
require('../app')
const config = require('config')
const caller = require('grpc-caller')

const SAMPLE_PROTO_PATH = `${__dirname}/../proto/sample.proto`

const HOST = config.get('host')
const PORT = config.get('port')
const HOSTPORT = `${HOST}:${PORT}`

const client = caller(HOSTPORT, SAMPLE_PROTO_PATH, 'AddressBookService')

describe('Integrated:Serivce -> Admin', () => {
    // Create Order
  describe('Creating Order', () => {
    // Creating Order
    let person = {
      name: 'John Doe',
      id: 1,
      email: 'john@gmail.com',
      phones: [
        {
          number: '+91 9052500315',
          type: 'WORK'
        }
      ]
    }
    let addressBook = {
      people: [person]
    }
    // Adding line to the order.
    it('Get Line For Creating Order', async done => {
      const response = await client.list({})
      expect(response).toMatchObject(addressBook)
      done()
    })
  })
})
