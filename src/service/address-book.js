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

export const list = async (ctx) => {
  ctx.res = addressBook
}
