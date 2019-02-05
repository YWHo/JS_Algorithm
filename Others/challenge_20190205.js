// Question 1:
// Clean the room function: given an input of
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that
// organizes these into individual array that is ordered. For example:
// answer(ArrayFromAbove) should return:
// [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591]
// Bonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const q1Arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
console.log('Q1 answer: ', q1Answer(q1Arr))

const q1ArrBonus = [1,2,4,'4',591,'391',392,'5','2',391,2,'2',5,10,2,1,'1', '1',1,1,20,20]
console.log('Q1 answer bonus: ', q1AnswerBonus(q1ArrBonus))

function q1Answer(arr) {
  let dict = {}
  Array.from(arr).forEach(element => {
    if (dict.hasOwnProperty(element)) {
      dict[element].push(element)
    } else {
      dict[element] = [element]
    }
  })
  let answer = []
  Object.keys(dict).sort(q1sort).forEach(element => {
    if (dict[element].length > 1) {
      answer.push(dict[element])
    } else {
      answer.push(dict[element][0])
    }
  })
  return answer
}

function q1sort(a, b) {
  return Number(a) > Number(b)
}

function q1AnswerBonus(arr) {
  let arrNum = []
  let arrStr = [] 
  Array.from(arr).forEach(element => {
    if (typeof element == 'string') {
      arrStr.push(element)
    } else {
      arrNum.push(element)
    }
  })
  return [q1Answer(arrNum), q1Answer(arrStr)]
}


// Question 2:
// Write a javascript function that takes an array of numbers and
// a target number. The function should find two different numbers
// in the array that, when added together, give the target number.
// For example:
// answer([1,2,3], 4) should return [1,3]

const q2Arr = [1,2,3]
const targetNum = 4
console.log('Q2 answer: ', q2Answer(q2Arr, targetNum))

function q2Answer(arr, targetNum) {
  let i, j
  while (arr.length > 0) {
    const a = arr.shift()
    for (let num of arr) {
      if ((a + num) == targetNum) {
        i = a
        j = num
        break
      }
    }
    if (i & j) break
  }
  return [i, j]
}


// Question 3:
// Write a function that converts HEX to RGB. Then Make that function
// auto-dect the formats so that if you enter HEX color format it returns
// RGB and if you enter RGB color format it returns HEX

const hexColor = 'F3E423' // 243,228,35
const rgbColor = '18,188,143' // 12BC8F

console.log('Q3 answer: hexColor to RGB: ', convertColor(hexColor))
console.log('Q3 answer: rgbColor to HEX: ', convertColor(rgbColor))

function convertColor(colorStr) {
  if (/,/.test(colorStr)) {
    return rgb2hex(colorStr)
  } else {
    return hex2rgb(colorStr)
  }
}

function hex2rgb(hex) {
  const r = '0x' + hex.substr(0, 2)
  const g = '0x' + hex.substr(2, 2)
  const b = '0x' + hex.substr(4, 2)
  return `${parseInt(r)},${parseInt(g)},${parseInt(b)}`
}

function rgb2hex(rgb) {
  const arr = String(rgb).split(",")
  const hex1 = Number(arr[0]).toString(16)
  const hex2 = Number(arr[1]).toString(16)
  const hex3 = Number(arr[2]).toString(16)
  return `${hex1}${hex2}${hex3}`.toUpperCase()
}