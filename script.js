// // QUESTION 1
// //          Do the below programs in anonymous function & IIFE
// //  a .Print odd numbers in an array
             var result=[]
              var a=function (arr){
            for(var i=0;i<arr.length;i=i+1){
                if(arr[i]%2!==0){
                    result.push(arr[i]) 
                }                                                                     

            }
            return result
        }
        console.log(a([12,3,345,36,22,57,86,433,45,66])) 
//     a .Print odd numbers in an array
        // IIFE Function
        var result2=[]
              var a=(function (arr){
            for(var i=0;i<arr.length;i=i+1){
                if(arr[i]%2!==0){
                    result2.push(arr[i]) 
                }  
            }
            console.log(result2)
        }

        ([12,3,345,36,22,57,86,433,45,66])) 

//    b.  Convert all the strings to title caps in a string array
//     // ANNONYMOUS    
        var stringArray = ["this is task four", "guvi geek", "website development"];

        
        var titleCaseArray = stringArray.map(function(str) {
            return str.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        });
        
        console.log(titleCaseArray);

//    b.  Convert all the strings to title caps in a string array     
// // IIEF  
var stringArray = ["this is task four", "another example", "title caps"];

var a1 = (function(arr) {
    var result1 = [];
    
    for (var i = 0; i < arr.length; i++) {
        result1.push(arr[i].replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }));
        console.log(result1);
    }
    
})(stringArray);

//  c. Sum of all numbers in an array
// // ANNONYMOUS 
var numberArray = [1, 2, 3, 4, 5, 6, 7];

var sum = function(arr) {
    var total = 0;
    
    arr.forEach(function(number) {
        total += number;
    });
    
    return total;
}(numberArray);

console.log(sum);
//  c .Sum of all numbers in an array
// // IIEF 
var numberArray1 = [1, 2, 3, 4, 5, 6, 7];

var sum1 = (function(arr) {
    var total = 0;
    
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    
    return total;
})(numberArray1);

console.log(sum1);
// d .Return all the prime numbers in an array
// // ANNONYMOUS
var numberArray2= [2, 3, 6, 7, 11, 13, 15, 17, 19, 23, 29, 31, 37];

var primeNumbers = numberArray2.filter(function(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
});

console.log(primeNumbers);

// d .Return all the prime numbers in an array
// // IIEF 
var numberArray3 = [2, 3, 6, 7, 11, 13, 15, 17, 19, 23, 29, 31, 37];

var isPrime = function(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};

var primeNumbers3 = numberArray3.filter(isPrime);

console.log(primeNumbers3); 
// e .Return all the palindromes in an array
// // ANNONYMOUS

var stringArray4 = ["level", "hello", "racecar", "world", "deified", "algorithm"];

var isPalindrome = function(str) {
    str = str.toLowerCase(); 
    var reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
};

var palindromeStrings = stringArray4.filter(isPalindrome);

console.log(palindromeStrings);
//  e ,Return all the palindromes in an array    
// // IIEF 
var stringArray5 = ["level", "hello", "racecar", "world", "deified", "algorithm"];

var palindromeStrings5 = (function(arr) {
    var isPalindrome5 = function(str) {
        str = str.toLowerCase(); 
        var reversedStr = str.split("").reverse().join("");
        return str === reversedStr;
    };

    return arr.filter(isPalindrome5);
})(stringArray5);

console.log(palindromeStrings5);
// f .Return median of two sorted arrays of the same size.
// // ANNONYMOUS

var array1 = [1, 3, 8, 9, 15];
var array2 = [7, 11, 18, 19, 21];

var findMedian = function(arr1, arr2) {
    var mergedArray = arr1.concat(arr2);
    var sortedArray = mergedArray.sort(function(a, b) {
        return a - b;
    });
    var middle = Math.floor(sortedArray.length / 2);
    
    if (sortedArray.length % 2 === 0) {
        return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    } else {
        return sortedArray[middle];
    }
};

var median = findMedian(array1, array2);

// // console.log(median); 
// f .Return median of two sorted arrays of the same size.
// // IIEF 

var array3 = [1, 3, 8, 9, 15];
var array4 = [7, 11, 18, 19, 21];

var median1 = (function(arr1, arr2) {
    var mergedArray3 = arr1.concat(arr2);
    var sortedArray4 = mergedArray3.sort(function(a, b) {
        return a - b;
    });
    var middle2 = Math.floor(sortedArray4.length / 2);
    
    if (sortedArray4.length % 2 === 0) {
        return (sortedArray4[middle2 - 1] + sortedArray4[middle2]) / 2;
    } else {
        return sortedArray4[middle2];
    }
})(array3, array4);

console.log(median1); 
// g .Remove duplicates from an array
// // ANNONYMOUS 
var originalArray = [1, 2, 2, 3, 4, 4, 5, 5];

var uniqueArray = originalArray.filter(function(item, index, self) {
    return self.indexOf(item) === index;
});

console.log(uniqueArray);  
// g .Remove duplicates from an array
// // IIEF 
var originalArray1 = [1, 2, 2, 3, 4, 4, 5, 5];

var uniqueArray1= (function(arr) {
    var seen = {};
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            result.push(arr[i]);
        }
    }

    return result;
})(originalArray1);

console.log(uniqueArray1); 
// h .Rotate an array by k times
// // ANNONYMOUS
var originalArray5= [1, 2, 3, 4, 5];
var k = 2;

var rotatedArray5 = (function(arr, k) {
    k = k % arr.length; 
    if (k < 0) k += arr.length;

    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
})(originalArray5, k);

console.log(rotatedArray5); 
// h .Rotate an array by k times
// // IIEF 
var originalArray6 = [1, 2, 3, 4, 5];
var k = 2;

var rotatedArray6 = (function(arr, k) {
    k = k % arr.length; 
    if (k < 0) k += arr.length;
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
})(originalArray6, k);

console.log(rotatedArray6);

// // QUESTION 2
// // Do the below programs in arrow functions.
// // a.Print odd numbers in an array

var numberArray7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numberArray7.forEach(num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
});   


// b .Convert all the strings to title caps in a string array

var stringArray7 = ["kanchana devi", "web develope", "guvi geek"];

var toTitleCase1 = str => {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

var titleCaseArray7 = stringArray7.map(toTitleCase1);

console.log(titleCaseArray7);

// c .Sum of all numbers in an array
var numberArray8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = numberArray8.reduce((total, num) => total + num, 0);

console.log(sum);

// d .Return all the prime numbers in an array

var numberArray9= [2, 3, 6, 7, 11, 13, 15, 17, 19, 23, 29, 31, 37];

var isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};

var primeNumbers9 = numberArray9.filter(isPrime);

console.log(primeNumbers9); 
// e .Return all the palindromes in an array
var stringArray9 = ["level", "hello", "racecar", "world", "deified", "algorithm"];

var isPalindrome9 = str => {
    str = str.toLowerCase(); 
    var reversedStr9 = str.split("").reverse().join("");
    return str === reversedStr9;
};

var palindromeStrings9 = stringArray9.filter(isPalindrome9);

console.log(palindromeStrings9);
              
              
        