/* exercise 1 */
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(12, 9))

/* exercise 2 */
const isAdult = (number) => {
  if (number >= 18) {
    return 'Adult'
  } else {
    return 'Minor'
  }
}
console.log('Exercise 2 result:', isAdult(24))

/* exercise 3 */
const isCharAVowel = (character) => {
  if (
    character === 'a' ||
    character === 'e' ||
    character === 'i' ||
    character === 'o' ||
    character === 'u'
  ) {
    return 'True'
  } else {
    return 'false'
  }
}
console.log('Exercise 3 result:', isCharAVowel('d'))

/* exercise 4 */
const generateEmail = (name, domain) => {
  return `${name}@${domain}`
}
console.log('Exercise 4 Result:', generateEmail('Muneeb', 'example.com'))

/* example 5 */
const greetUser = (name, tod) => {
  return `Good ${tod},${name}!`
}
console.log('Exercise 5 Result:', greetUser('Muneeb', 'Morning'))

/* Exercise 6 */
const maxOfThree = (num1, num2, num3) => {
  return Math.max(num1, num2, num3)
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

/* Exercise 7 */
const calculateTip = (ba, tp) => {
  return `${ba * (tp / 100)}`
}
console.log('Exercise 7 Result:', calculateTip(50, 20))

/* exercise 8 */
const convertTemperature = (temp, scale) => {
  if (scale === 'C') {
    return `${temp * (9 / 5) + 32}`
  } else if (scale === 'F') {
    return `${(temp - 32) * (5 / 9)}`
  } else {
    return 'invalid'
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, 'F'))

/* exercise 9 */
const basicCalculator = (n1, n2, op) => {
  switch (op) {
    case 'add': {
      return n1 + n2
    }
    case 'subtract': {
      return n1 - n2
    }
    case 'multiply': {
      return n1 * n2
    }
    case 'divide':
      if (n2 !== 0) {
        return n1 / n2
      }
  }
}
console.log('Exercise 9 Result:', basicCalculator(15, 6, 'divide'))

/* exercise 10 */
const calculateGrade = (num) => {
  if (num >= 90 && num <= 100) {
    return 'A'
  } else if (num >= 80 && num <= 89) {
    return 'B'
  } else if (num >= 70 && num <= 79) {
    return 'C'
  } else if (num >= 60 && num <= 69) {
    return 'D'
  } else num < 60 && num > 0
  {
    returm('F')
  }
}
console.log('Exercise 10 Result:', calculateGrade(85))

/* Exercise 11 */
const createUsername = (fn, ln) => {
  let count = fn.length + ln.length
  return `${fn.substring(0, 3) + ln.substring(0, 3) + count}`
}
console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'))
