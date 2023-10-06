import * as lab1 from './lab1.mjs';

//TODO: Write and call each function in lab1.js 5 times each, passing in different input
console.log(lab1.questionOne(["Hello", "good", "weather", "today"]))
console.log(lab1.questionOne(["I", "love", "CS 546.", "Best class ever."]))
console.log(lab1.questionOne(["Ths s nrdbl", "grd"]))
console.log(lab1.questionOne(["How", "aRE", "YoU", "toD@y"]))
console.log(lab1.questionOne(["The", "sun", "1s", "shining"]))

console.log(lab1.questionTwo({a: 3, b: 2, c: 1, d:7 }, {a: 6, b: 5, c:4, e: 8 }))
console.log(lab1.questionTwo({a: 3, b: 2, f: 1, g: 46 }, {d: 3, e: 4, c:5, g: 2 }))
console.log(lab1.questionTwo({'1': true, a: 5, '2': 'Hi'}, {'3': true, b: 5, '44': "hi", '4': "bye", '5': 8 }))
console.log(lab1.questionTwo({'1': true, a: 5, '2': 'Hi'}, {'33': true, b: 5, '440': "hi", '4': "bye", '5': 8 }))
console.log(lab1.questionTwo({z: 3, 1: 2, cc: 1, c:7 }, {'Hi': 6, 'Hello': 5, cc:4, e: 8 }))

console.log(lab1.questionThree([[3,3,3], [3,3,4], [5,4,2]]))
console.log(lab1.questionThree([[3,3,3], [3,3,4], [5,4,2], [3,3,4]]))
console.log(lab1.questionThree([[3,3,3], [3,3,4], [5,4,2], [3,3,3], [3,3,4], [5,4,2]]))
console.log(lab1.questionThree([[33,23,13], [39,40,4], [5.5,4,2]]))
console.log(lab1.questionThree([[3,3,1], [4,3,4], [6,4,2], [5,3,4]]))

console.log(lab1.questionFour('patrick,hill,trees,home'))
console.log(lab1.questionFour('patrick, hill, trees, home')) //this one has spaces
console.log(lab1.questionFour('  word  ,  book  ,newspaper , article')) 
console.log(lab1.questionFour('apple, fruit, blueberry'))
console.log(lab1.questionFour('Maple, hoNey, syrUp, AGAVE'))