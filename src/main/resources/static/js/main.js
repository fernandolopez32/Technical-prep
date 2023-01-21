
//1
//loop that counts to a given number
function countToNumber(number){
    for(let i =1; i<=number; i++){
        console.log(i)
    }
}
//solved
// countToNumber(50);

// 2
//given a sorted array of integers arr and an integer target, find the index of the first and last position of target in arr. Ir target cant be found in arr, return [-1, -1]

let arr = [1,2,4,5,6,7,5,4,3,4]
let Target = 2;

function findFirstAndLastInstanceOfTarget(array, target) {
    return (`[${array.indexOf(target)},${array.lastIndexOf(target)}]`);
}

console.log(findFirstAndLastInstanceOfTarget(arr,Target));

//3
//given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.
let nums  = [2, 7, 11, 15]
let target = 9


function indexOfNumbers(arr,tar)
{
    for(let i = 0; i <= arr.length; i++){
        for(let j = i; i <= arr.length; j++){
            if (arr[i] + arr[j] === tar){
                return arr.indexOf(j);
            }
        }
    }
}

console.log(indexOfNumbers(nums, target));


// write a function that will take an array and return an array with only odd numbers in it
let newArray = [1,4,5,2,4,6,87,3]

function findAllOddNumbers(array){
    return  array.filter(number => number % 2 === 1)
}

console.log(findAllOddNumbers(newArray));


// write a function that will take an array and multiply each element of the array by two
function multiplyEachElementByTwo(array){
    return array.map(e => e*2)
}
console.log(multiplyEachElementByTwo(newArray));

// write a function that will divide each element in an array by a number

function multiplyByX(array, divisor){
 return array.map(element => element / divisor)
}

console.log(multiplyByX(newArray,4));