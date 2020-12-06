// test('Hello World', () => {

// })

// test('Hello World', () => {
//   throw new Error('Mocking an  error')
// })

// Run a test to check code in example-code-tobe-tested.js 
const { calWithTip, add } = require("./example-code-tobe-tested")


// sync code test with jest 
test('calWithTip should return total amount with tip', () => {
  total = calWithTip(10,0.1)
  expect(total).toBe(11)
})

// Async Code Test with jest
test('add should add to numbers but it will  return result after 2 seconds', (done) => {
    add(1,1).then(sum => { //.then since we're working with promises
      expect(sum).toBe(2) 
      done()
    })
})
//OR Async/Await
test('add should add to numbers but it will  return result after 2 seconds', async () => {
  const sum = await add(1,1)
  add(1,1).then(sum => { //.then since we're working with promises
  expect(sum).toBe(2) 
  })
})