let person = {
  name: 'John Doe',
  id: 1,
  email: 'john@gmail.com',
  phones: [
    {
      number: '+91 9052500315',
      type: 2
    }
  ]
}
let addressBook = {
  people: [person]
}

export const list = (ctx) => {
  ctx.res = addressBook
}
