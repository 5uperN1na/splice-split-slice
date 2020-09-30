
let myArray = [1,2,3,4,5];

for (let i = 0; i< myArray.length; i++) {

    console.log(myArray[i]);

}

//splice
//this changes the array by deleting value and replacing with another value

//array.splice(start, [deleteCount], [item1], [item2])

let spliceArray = [10, 9, 8, 7, 6, 5];

spliceArray.splice(3, [7], 6);

console.log(spliceArray);



//convert array-like objects/collections to a new array

function convert2Array(){
    return Array.prototype.slice.call(arguments);
}

var arr = convert2Array(5,4,3);
console.log(arr)

//slice
//method on array and string objects.  non destructive and make a copy.

//Array.prototype.slice()

// array.slice(begin, end)
// string.slice(begin, end)

let sliceArray = [3,2,7,5];

let newSlice = sliceArray.slice(0,2);

console.log(newSlice);

//split

//splits a string object into an array

//String.prototype.split()
//string.split([separator[, limit]])

let wod = "Hey there!";

var words = wod.split(' ', 3);  

console.log(words);
 
//palindrome check

// let letters = 'abcba';
// let letters = 'boooob';
let letters = 'zippic';

function isPalindrome (letters) {
    return letters === letters.split('').reverse().join('');

}

console.log(isPalindrome(letters));

