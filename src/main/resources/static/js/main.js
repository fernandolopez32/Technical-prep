
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
let target = 5;

function findFirstAndLastInstanceOfTarget(array) {
    return (`[${array.indexOf(target)},${array.lastIndexOf(target)}]`);
}

console.log(findFirstAndLastInstanceOfTarget(arr));

