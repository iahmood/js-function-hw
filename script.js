/* exeercise number 1 */
const maxOfTwoNumbers = (n1, n2) => {
  if (n1 >= n2) {
    return n1
  } else {
    return n2
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(7, 6))

/* exercise number 2 */
const isAdult = (n) => {
  if (n >= 18) {
    return 'Adult'
  } else n < 18
  {
    return 'Minor'
  }
}
console.log('Exercise 2 result:', isAdult(56))

/* exercise number 3 */
const isCharAVowel = (char) => {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'
  ) {
    return 'true'
  } else {
    return 'false'
  }
}
console.log('Exercise 3 result:', isCharAVowel('z'))

/* exercise number 4 */
const generateEmail = (name, domain) => {
  return `${name}@${domain}`
}
console.log('Exercise 4 Result:', generateEmail('Muneeb', 'gmail.com'))

/* exercise number 5 */
const greetUser = (name, tod) => {
  return `Good ${tod},${name}`
}

console.log('Exercise 5 Result:', greetUser('Muneeb', 'Morning'))

/* exercise number 6 */
const maxOfThree = (n1, n2, n3) => {
  {
    return Math.max(n1, n2, n3)
  }
}
console.log('Exercise 6 Result:', maxOfThree(2, 5, 1))

/* exercise number 7 */
const calculateTip = (amount, tip) => {
  return `${(amount * tip) / 100}`
}
console.log('Exercise 7 Result:', calculateTip(50, 20))

/* exercise number 8 */
const converTemperature = (temp, scale) => {
  if (scale === 'C') {
    return (temp * 9) / 5 + 32
  } else if (scale === 'F') {
    return ((temp - 32) * 5) / 9
  }
}
console.log('Exercise 8 Result:', converTemperature(32, 'F'))

/* exercise number 9 */
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
console.log('Exercise 9 Result:', basicCalculator(1, 5, 'divide'))

/* exercise number 10 */
const calculateGrade = (num) => {
  if (num >= 90 && num <= 100) {
    return 'A'
  } else if (num >= 80 && num <= 89) {
    return 'B'
  } else if (num > 70 && num <= 79) {
    return 'C'
  } else if (num >= 60 && num <= 69) {
    return 'D'
  } else num >= 0 && num <= 60
  {
    return 'F'
  }
}
console.log('Exercise 10 Result:', calculateGrade(59))

/* exercise number 11 */
const createUsername = (fn, ln) => {
  let count = fn.length + ln.length
  return `${fn.substring(0, 3) + ln.substring(0, 3) + count}`
}
console.log('Exercise 11 Result:', createUsername('Muneeb', 'Ahmad'))

/* exercise number 11 */
const numArgs = (...args) => {
  return args.length
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4, 5))
