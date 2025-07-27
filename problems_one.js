// 1) Find the Max and Min num  in an Array

/*
    let arr =[10,20,25,35,56,76,97,32]

    let max = arr[0]
    let min = arr[0]

    for(let i=0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        else if(arr[i]<min) {
            min = arr[i]
        }
    }


    console.log(max);
    console.log(min);

*/
//  2) 	Find a 2nd maximum and Minimum number in an array 

/*
let array = [10, 20, 25, 35, 56, 76, 76, 85, 97, 32];

let firstMAx = -Infinity;
let secondMax = -Infinity;

let firstMin = Infinity;
let secondMin = Infinity;

for(let i = 0 ; i < array.length ; i++){
    let num = array[i]

    // for second max
    if(num > firstMAx){
        secondMax = firstMAx;
        firstMAx = num;
    }
    else if (num > secondMax && num < firstMAx){
        secondMax = num;

    }

    // for second min
    if(num < firstMin){
        secondMin= firstMin;
        firstMin = num
    }
    else if(num < secondMin && num > firstMin){
        secondMin = num
    }
}

console.log("second max" , secondMax);
console.log("second min" , secondMin);

*/

/* // separate for max
 let array =[10,20,25,35,56,76,76,85,97,32]

    let first = -Infinity;
    let second = -Infinity;


    for(let i=0 ;i < array.length ; i++){
        let num = array[i]

        if(num > first){
            second = first
            first = num;
        }else if(num > second && num < first){
            second=num;
        }
    }

    console.log("second max: " ,second);
*/

/*


// separate for min
 let array =[10,20,25,35,56,76,76,85,97,32]

    let first = Infinity;
    let second = Infinity;


    for(let i=0 ;i < array.length ; i++){
        let num = array[i]

        if(num < first){
            second = first
            first = num;
        }else if(num < second && num > first){
            second=num;
        }
    }

    console.log("second min: " ,second);
*/


// 3)	Sort an array without using built in methods

/*
    let array =[10,35,56,76,20,25,97,32]

    console.log("array sort by inbuilt ", array.sort());
    
    for(let i = 0; i< array.length-1 ; i++){

        for(let j=0 ; j< array.length - i- 1; i++){

            if(array[j]> array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp 
            }
        }
    }

    console.log(array);
*/


// 4)	write a function to remove the duplicate element from an array

/*
    let arr = [10, 20, 10, 35, 20, 50];
    let uniqueArr =[...new Set(arr)]
    console.log(uniqueArr);
*/

/*
function removeDuplicates(arr){
    let result = []

    for(let i =0 ; i < arr.length ; i++){
        let exist = false;

        for(let j=0 ; i< result.length ; j++){
            if( arr[i] == arr[j]){
                exist = true;
                break;
            }
   
        }

        if(!exist){
            result.push(arr[i])
        }
    }
    return result

}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
*/

// 5) write a function to remove duplicate elements in a string "HelloWorld"

/*
let str = "banana"
let uniqueStr = [...new Set(str)].join("")  // join to conver to string
console.log(uniqueStr);
*/

/*
function UniqueStr(str){
    let result =""

    for(let i = 0; i < str.length ; i++){
        let exist = false;

        for(let j = 0; j < result.length ; j++){
            if(str[i] == str[j]){
                exist = true;
                break;
            }
        }
        if(!exist){
            result+=str[i]        
        }
    }
    return result;
}

console.log(UniqueStr("helloworld!"));
*/


// 6) Write function to convert camelCase to snake_case

/*
function camelToSnake(str){
    return str.replace(/([A-Z])/g , '_$1').toLowerCase()
}

console.log(camelToSnake("camelCaseExample"));

//(A-Z) ==> matche uppercase
// _$1 ==> adds the underscore beofre the letter


*/

/*
function camelToSnake(str){
    let result = " "

    for(let i =0 ; i< str.length ; i++){
        let char = str[i]

        if(char >="A" && char <="Z"){
            result+= "_" + char.toLowerCase()
        }else{
            result += char;
        }
    }
    return result;
}


console.log(camelToSnake("camelCaseExample"));
console.log(camelToSnake("isLoggedInActive"));

*/

/*

function camelToSnake(str){
    let result = " "

    for(let i =0 ; i< str.length ; i++){
        let char = str[i]
        // let code = char.charCodeAt(0);

        if(char >="A" && char <="Z"){
            result+= "_" + char.toLowerCase()
            // result += "_" + String.fromCharCode(code + 32);
        }else{
            result += char;
        }
    }
    return result;
}


console.log(camelToSnake("camelCaseExample"));
console.log(camelToSnake("isLoggedInActive"));
*/

//7)	write a function to convert snake_case to camelCase

/*
function snakeToCamel(str){

    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    
}

console.log(snakeToCamel("is_logged_in"));
*/

/*
function snakeToCamel(str){
    let result = " ";
    let toUpper = false

    for(let i=0 ; i < str.length ; i++){
        let char = str[i]

        if(char === '_'){
            // result += char.toUpperCase();
            toUpper = true
        }else{
           if(!toUpper){
            result+= char.toUpperCase()
            toUpper = false;
           }
           else{
            result +=char
           }
        }


    }
    return result
}

console.log(snakeToCamel("is_logged_in"));

*/

//8)	write a function to flatten the nested array

/* 
let arr = [1, 2, [7, 8, [61, 54, 65], 54, 32], 76, 43];
let flat = arr.flat(Infinity);
console.log(flat);
*/


/*
let arr = [1,2,[7,8,[61,54,65],54,32],76,43]
let arr = [1, 2, [7, [99], 8], 3]
let flat_array =[]

function flattenArray(arr){
    for(let i=0 ; i<arr.length ; i++){
        if(Array.isArray(arr[i])){
                flattenArray(arr[i])
        }else{
            flat_array.push(arr[i])
        }
    }
    return flat_array
}

 console.log(flattenArray(arr));

*/


/* chekcing with length is not good practice
 function flttenArray(arr){
    for(let i=0 ; i< arr.length ; i++){
        if(arr[i].length>=1){
            flttenArray(arr[i])
        }else{
            flat_array.push(arr[i])
        }
    }
    return flat_array

}
console.log(flttenArray(arr));
*/


//09)  Write a function to find the 2nd largest number in a nested array

/*
let arr = [1, 2, [7, 8, [61, 54, 65], 54, 32], 76, 75];
let first = -Infinity;
let second =-Infinity;

function  flattenSecondLargest(arr){

    for(let i=0 ; i<arr.length ; i++){
        if(Array.isArray(arr[i])){
            flattenSecondLargest(arr[i])
        }
        else{
            let num = arr[i]

                if(num>first){
                    second = first;
                    first =num;
                }
                else if(num > second &&  num < first){
                    second = num
                }
        }
    }
    return second
    
}

console.log(flattenSecondLargest(arr))
*/


// 10)	write a function to generate below pattern
/*
a.	1
b.	2 9
c.	3 8 10
d.	4 7 11 14
e.	5 6 12 13 15
*/








//11)	program for adding zeros after 3 values in array 
// a.	Example: [1, 2,3,4,5,6,6,7,8]
 // b.	Output: [1, 2,3,0,4,5,6,0,6,7,8,0]
/*
        let arr =[1, 2,3,4,5,6,6,7,8]
        let result =[]
        for(let i =0 ; i< arr.length ; i++){
            result.push(arr[i])

            if((i+1) %3 ===0){
                result.push(0)
            }
        }

        console.log(result);

   */     


// 12 ) Reverse a string a without using built in method

/*
let str = "kushal"
let result = ''

for(let i=str.length-1; i>=0 ;i-- ){
    result+= str[i]
}

console.log(result);
*/

// reverse a number
/*
let num = 1234;
let res =0

while(num >0){
    let lst_digit = num  % 10;
    res = res * 10 + lst_digit;
    num = Math.floor(num / 10)


}

console.log(res);
*/



// 13 Write a function to return a fibonacci series

/*
function fibonacci(n){
    let a= 0 ,b=1

    for(let i=0 ; i<n ; i++){
        console.log(a);
        let temp = a+b;
         a = b;
         b = temp;
    
        
    }
}

fibonacci(5)
*/

// another way by destrcuring
/*
function fibonacci(n){
    let a=0,b=1;

    for(let i=0; i<n ; i++){
        console.log(a);
        [a,b]=[b+a,a]
        
    }
}
fibonacci(5)
*/



// 15)	write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl'
/*
let arr= [1,2,3,3,5,2,1,7,6,8,7,8]

function countArrayElements(arr){
    const count = {}

    for(let i=0; i<arr.length ; i++){
        let item = arr[i]

        if(count[item]){
            count[item]+=1
        }else{
            count[item]=1
        }
    }
    return count
}

console.log(countArrayElements(arr));
*/

/*
let str = "abcdaabdlfjl"
function countStringChars(str){
    const count ={}

    for(let i=0; i<str.length ; i++){
        let item =str[i]

        if(count[item]){
            count[item]+=1
        }else{
            count[item]=1
        }
    }
    return count
}

console.log(countStringChars(str));
*/


// 16)	write a function to capitalize the each words first letter to capital 
// Ex : ['abc','def','ghi']
// a.	output : ['Abc', 'Def','Ghi"]


/*
function capitalize(arr){
    let result =[]

    for(let i=0 ; i< arr.length ; i++){
        let word = arr[i]
        let capitalize = word[0].toUpperCase()

        for(let j=1 ; j<arr.length ; j++){
            capitalize +=word[j]
        }
        result.push(capitalize)
    
    }
    return result
}

let arr = ["abc" , "dfe" ,"xyz"]

console.log(capitalize(arr));
*/

//18 ) write a function to calculate the sum of total marks in an array of objects 
// a.	ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]

/*
function totalMarks(arr){
    let total =0 ;

    for(let i =0 ; i < arr.length ; i++){
        total+= arr[i].marks
    }
    return total
}

const sub = [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]

console.log(totalMarks(sub));
*/

// 22) Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]

/*
function mergeWithoutDuplicates(arr_a,arr_b){

    let result =[]

    for(let i=0; i< arr_a.length; i++){
        let exist =false;
        for(let j=0; j<result.length;j++){
            if(result[j]===arr_a[i]){
                exist = true;
                break;
            }
        }
        if(!exist){
            result.push(arr_a[i])
        }
        
    }

    for(let i=0; i<arr_b.length; i++){
        let exist = false;
        for(let j=0; j<result.length;j++){
            if(arr_b[i]=== result[j]){
                exist = true;
                break;
            }
        }
        if(!exist){
            result.push(arr_b[i])
        }
    }
    return result
}


let a = [1, 2, 3, 4, 5];
let b = [5, 3, 7, 8, 9];
console.log(mergeWithoutDuplicates(a, b));
*/

// 23) 	Write a JavaScript program that takes an array like [1, 1, 2, 3, 3, 3] and returns an object where the keys are the elements and the values are the count of how many times each element appears


/*
function countElement(arr){
    let count = {}

    for(let i=0 ; i< arr.length ; i++){
        let item = arr[i]

        if(count[item]){
            count[item]+=1;
        }else{
            count[item]=1
        }
    }
    return count
}

console.log(countElement([1, 1, 2, 3, 3, 3]));
*/