// 1.Return the First Element in an Array.
// Create a function called "getFirstValue()" that takes an array containing only numbers and return the first element.

function getFirstValue(arr1) {
 return arr1[0]
}
console.log(getFirstValue([ 1 ,  2 ,  3 ]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

//2.Return the Last Element in an Array.
// Create a function called "getLastItem()" that accepts an array and returns the last item in the array.
// Don't forget to return the result.

function getLastItem(arr2) {
    return arr2[2]
}
console.log(getLastItem([1,2,3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));

// 3.Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string (used: Function Expression).
// Don't forget to return the result.

let finIndexFunc=function (arr3,string) {
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] == string) {   
        }  
    }
    return i
}
console.log(finIndexFunc["hi", "edabit", "fgh", "abc"], "fgh");
console.log(finIndexFunc["Red", "blue", "Blue", "Green"], "blue") ;
console.log(finIndexFunc["a", "g", "y", "d"], "d");
console.log(finIndexFunc["Pineapple", "Orange", "Grape", "Apple"], "Pineapple");

//4.Return the Sum of Two Numbers.
// Create a function that called "addition()" takes two numbers as arguments and returns their sum.(used: Parameter)
// Don't forget to return the result.

function myFunction(a,b) {
    return a+b;
}
console.log(myFunction(2, 3));
console.log(myFunction(-3, -6));
console.log(myFunction(7, 3));

//5.Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. (used: Arrow function)

let arrFunction=(x, y) => {
  return x + y < 100;
}
console.log(arrFunction(22,15));
console.log(arrFunction(83, 34));
console.log(arrFunction(3, 77));

// 6.Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys)
//  and returns the multiplication sizes of the box.
// Don't forget to return the result.

let volumeOfBox=(width, length, height) => {
    return width*length*height
}
console.log(volumeOfBox(2,5,1));
console.log(volumeOfBox(4, 2, 2));
console.log(volumeOfBox(2, 3, 5));

// 7.Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Create a function called "points(twoPointers, threePointers)" and add two parameters to it.

let pointers=(twoScore, threeScore)=> {
    return twoScore*2+threeScore*3
}
console.log(pointers(1, 1));
console.log(pointers(7, 5));
console.log(pointers(38, 8));


// 8.Create a function called 'fillInfo()', which is used to change "my name" to 'Ulfat' ,'my surname' to 'Zakirli', 'my city' to 'Baku'.
// (used: for...of).
const arr5=[
    {
        name:'myName',
        surname:'surName',
        city:'myCity'
    },
    {
        name:'myName',
        surname:'surName',
        city:'myCity'
    },
    {
        name:'myName',
        surname:'surName',
        city:'myCity'
    }
]
function fillInfo() {
    for(let man of arr5){
        man.name="Vilayat",
        man.surname="Zeynalli",
        man.city="IMISHLI"
    }
        return arr5
}
console.log(fillInfo());