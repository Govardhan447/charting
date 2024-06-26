const numbers = []

const numsList = numbers.map(index => ({
  timestamp: `${new Date()}`,
  value: index + 1,
}))

console.log(numsList)
