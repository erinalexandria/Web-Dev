export const questionOne = (arr) => {
  /*
questionOne(arr)
For your first function, you will calculate the amount of vowels (A, E, I, O, U, not Y) 
in each string in the supplied array and return the sum of all the amounts. Additionally, 
a boolean should be returned indicating whether the total sum was even. 
To return both outputs, use an array. The order of elements matters.
  */
  
  // Implement question 1 here
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let str of arr) {
    for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++
    }
    }
  }

  let ifEven = count % 2 === 0
  return [count, ifEven]; //return result
};

/* 
questionTwo(obj1, obj2);
For your 2nd function, you will take in two objects and return an 
array containing all the keys they don't have in common. More specifically, 
every key that occurs in one object but not the other should be in the returned 
array; any key in both, even if the values are different, should be discarded. 
The returned array should be stably sorted by the keys numerically first 
(if the key is a string representation of a number,  as all keys in an object are strings) 
and then alphabetically. 
*/

export const questionTwo = (obj1, obj2) => {
  // Implement question 2 here
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)

  let uniqueKeys = keys1.filter(key => !keys2.includes(key))
  .concat(keys2.filter(key => !keys1.includes(key)))

  uniqueKeys.sort((a, b) => a.localeCompare(b, undefined, { numeric:true}))
  
  return uniqueKeys;//return result
};

/* questionThree(array)

For your third function, you will take in an array of arrays (a 2d array). 
Each array will contain 3 numbers, which represent the 3 sides of a triangle. 
You will return an object that has the area and perimeter of each triangle. 
Round the area to the nearest 2 decimal places. 
 
The keys of the object will correspond to the index of each triangle in the 
original array. The value of each key will be an array containing the area 
and perimeter, in that order. For example -> [area, perimeter]. 

*/

export const questionThree = (arr) => {
  // Implement question 3 here
  
  let area = []
  arr.forEach((element) => {
    let a = (element[0] + element[1] + element[2])/2
    let b = (Math.sqrt(a * (a - element[0]) * (a - element[1]) * (a - element[2]))).toFixed(2)
    area.push(b)
  })

  let perimeter = []
  arr.forEach((element) => {
    let sum = element[0] + element[1] + element[2]
    perimeter.push(sum)
  })

  let triangleResults = area.map((a,b) => [a,perimeter[b]])

  let result = {}
  triangleResults.forEach((row, index) => {
    result[index] = row
  })

  return result; //return result
};

/* 
questionFour(string)
For the fourth function, you will take each word from a comma-separated value (CSV),
cut it in half, and put the second half in front of the first half. For example, 
"tree" -> "eetr". If there is an odd number of letters, you can cut the word in half 
from the center letter in either direction. For example, for "patrick" -> "rickpat" 
or “ickpatr” would both be acceptable and correct answers. Return each modified word in a new array.
*/

export const questionFour = (string) => {
  // Implement question 4 here
  let array = string.split(',').map(element => element.trim())
  let newArray = []
  array.forEach((element) => {
    let split1 = element.slice(element.length/2)
    let split2 = element.slice(0, element.length/2)
    //split 1 (2nd half) goes in front of split 2 (first half)
    let split3 = split1.concat(split2)
    newArray.push(split3)

  })
  
  return newArray; //return result
};


export const studentInfo = {
  firstName: 'Erin',
  lastName: 'Brown',
};
