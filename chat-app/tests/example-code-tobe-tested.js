
// Sync Functions
const calWithTip = (total, percentage) => total + (total * percentage)

// Async function
const add = (a,b) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('Numbers must be positive')
      }

      resolve(a + b)
    }, 2000)
  })
}


module.exports = {
  calWithTip,
  add
}