const questionsAndAnswers = [
    {
        question: "1. Create a function that calculates the sum of two given numbers.",
        answer: function () {
            let num1 = Number(window.prompt('Enter First Number'));
            let num2 = Number(window.prompt('Enter Second Number'));
            if (num1 && num2) {
                return `The sum of ${num1} and ${num2} is: ${num1 + num2}`;
            } else {
                alert('Please enter valid numbers.');
                return 'Invalid input. Please enter numbers.';
            }
        }
    },
    {
        question: `2. Write a function that checks if a number is prime (a number that can only be divided by 1 and itself without any remainder).`,
        answer: function () {
            var num1 = Number(window.prompt('Enter Number To Check'))
            if (num1) {
                if (num1 % num1 == 0 && num1 % 1 == 0) {
                    return `Entered Number is: ${num1}` + ` + " " + 'is prime Number' + (True)`
                } else {
                    return `Entered Number is: ${num1}` + ` + " " + 'is not a prime Number' + (False)`
                }
            } else {
                return 'Please Enter A Number'
            }
        }
    },
    {
        question: `3. Write a function to reverse a given string (using built in method)`,
        answer: function () {
            var str = window.prompt("Enter String to Reverse")
            return `Reversed String is:` + str.split("").reverse().join("");
        }
    },
    {
        question: `4. Write a function to find the largest number in an array`,
        answer: function () {
            var numArray = [1, 2, 3, 4, 5, 6, 30];
            var Largest = numArray[0];
            for (let i = 1; i < numArray.length; i++) {
                if (numArray[i] > Largest) {
                    Largest = numArray[i];
                }
            }
            return `Array used: [${numArray}] and largest Number is: ${Largest}`;
        }
    },
    {
        question: `5. Write a function that filters an array and returns only the even numbers.`,
        answer: function () {
            var numArray = [15, 20, 30, 25, 3, 5, 2, 6, 8, 10]
            var EvenNo = []
            for (let i = 0; i < numArray.length; i++) {
                if (numArray[i] % 2 == 0) {
                    EvenNo.push(numArray[i])
                }
            }
            return `Array used: [${numArray}] and Even Numbers in it are: ${EvenNo}`;
        }
    },
    {
        question: `6. Implement a function to reverse a string without using the built-in reverse() method`,
        answer: function () {
            var str = window.prompt("Enter String To be Reversed")
            let reversedString = ''
            let stringArray = str.split('')
            for (let i = stringArray.length - 1; i >= 0; i--) {
                reversedString += stringArray[i]
            }
            return `Entered String: ${str} and its Reverse is: ${reversedString}`
        }
    },
    {
        question: `7. Write a function to calculate the average value of all numbers in an array.`,
        answer: function () {
            var numArray = [1, 2, 3, 4, 5]
            if (numArray.length != 0) {
                var sum = 0;
                for (let i = 0; i < numArray.length; i++) {
                    sum += numArray[i]
                }
                var avg = sum / numArray.length;
                return `Array Used is: ${numArray} and Average of Numbers is: ${avg}`
            } else {
                return 'array is Empty'
            }
        }
    },
    {
        question: `8. Write a function that determines whether a given day number (1-7) represents a weekday or weekend. `,
        answer: function () {
            if (number < 1 || number > 7) {
                return 'number must be between 1 & 7'
            } else {
                //!solution using if
                if (number == 6 || number == 7) {
                    return 'Weekend'
                } else {
                    return 'weekDay'
                }
                //! Solution Using Switch
                //          switch (number) {
                //              case 6:
                //              case 7:
                //                  return 'Weekend';
                //              default:
                //                  return 'Weekday';
                //          }
                //     }
                // }
            }
        },
    },
    {
        question: `9. Write a function that filters an array of numbers and returns only those that are divisible by 2 or 3. `,
        answer: function () {
            var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30, 45, 16]
            var isDivisible = []
            //! Using For Loop
            // for (let i = 0; i < numArray.length; i++) {
            //     if (numArray[i] % 2 == 0 || numArray[i] % 3 == 0) {
            //         isDivisible.push(numArray[i])
            //     }
            // }
            //! Using Map
            numArray.map((e) => {
                if (e % 2 == 0 || e % 3 == 0) {
                    isDivisible.push(e)
                }
            })
            return `Array Used is: ${numArray} and Numbers Divisible by 2 or 3 are: ${isDivisible}`
        }
    },
    {
        question: `10. Write a function that finds the index of a given element in an array. If the element isn't found, return  - 1.`,
        answer: function () {
            var numArray = [1, 2, 3, 4, 5]
            var element = Number(window.prompt("Enter Number To be Searched Through Array"))
            if (numArray.indexOf(element) != -1) {
                return `Array Used is: ${numArray} and Element Entered to be Searched is: ${element}
                    Index of Element: ` + numArray.indexOf(element)
            } else {
                return `Array Used is: ${numArray} and Element Entered to be Searched is: ${element}
                    Index of Element: ` + -1
            }
        }
    },
    {
        question: `11. Write a function to calculate the factorial of a given number.`,
        answer: function () {
            var number = Number(window.prompt("Enter Number You Want to Calculate its Factorial"))
            var fact = 1;
            for (let i = 2; i <= number; i++) {
                fact = fact * i
            }
            return `Number Entered is: ${number} and its factorial: ${fact}`
        }
    },
    {
        question: `12. Write a function that takes an object and returns an array containing only its keys.`,
        answer: function () {
            var obj = {
                name: 'john',
                age: 30
            }
            var property = []
            for (key in obj) {
                property.push(key)
            }
            return `Object Used is: ${JSON.stringify(obj)} and its Properties are: ${property}`
        }
    },
    {
        question: `13. Write a function that returns only the unique numbers from an array`,
        answer: function () {
            var numArray = [1, 2, 2, 3, 4, 4, 5]
            var UniqueArray = []
            for (let i = 0; i < numArray.length; i++) {
                if (numArray[i] != numArray[i + 1]) {
                    UniqueArray.push(numArray[i])
                }
            }
            // let UniqueArray = numArray.filter((element, index) => {
            //     return element !== numArray[index + 1];
            // });
            return `Array Used is: ${[numArray]} and Unique Values Are: ${[UniqueArray]}`
        }
    },
    {
        question: `14. Write a function to count the occurrences of each character in a string.`,
        answer: function () {
            var str = window.prompt("Enter String")
            let result = {}
            for (let i = 0; i < str.length; i++) {
                let ch = str.charAt(i)
                if (!result[ch]) {
                    result[ch] = 1;
                }
                else {
                    result[ch] += 1
                }
            }
            return `String Entered: ${str} and count of occurrence of each character in it is: ${JSON.stringify(result)}`;
        }
    },
    {
        question: `15. Write a function that sorts an array of numbers in ascending order.`,
        answer: function () {
            var numArray = [5, 3, 8, 1, 2]
            return `Array Used is ${numArray} and After Sorting: ${numArray.sort((a, b) => a - b)} `
        }
    },
    {
        question: `16. Write a function to check if a given string is an anagram of another string (i.e., contains the same characters in a different order).`,
        answer: function () {
            var str1 = window.prompt("Enter First String You Want to Check")
            var str2 = window.prompt("Enter Second String You Want to Want")
            let str1sort = str1.split("").sort().join('').toLowerCase();
            let str2sort = str2.split("").sort().join('').toLowerCase();
            if (str1sort === str2sort) {
                return `First String Entered: ${str1} and Second String Entered: ${str2} and they are anagrams ` + true
            } else {
                return `First String Entered: ${str1} and Second String Entered: ${str2} and they are anagrams ` + false
            }
        }
    },
    {
        question: `17. Write a function that removes all falsy values (false, null, 0, "", undefined,and NaN) from an array. `,
        answer: function () {
            var array = [0, false, "Hello", "", null, undefined, NaN, 42]
            var Filtered = array.filter((element) => ![0, false, null, "", undefined, NaN].includes(element))
            return `Array Entered: [${array}] after Filteration: [${Filtered}]`
        }
    },
    {
        question: `18. Write a function that creates a car object with properties such as model and year and includes a method to display the car's details.`,
        answer: function () {
            var model = window.prompt("Enter Car Model ")
            var year = window.prompt("Enter Car Year of Manufacture ")
            var obj = {
                model: model,
                year: year,
                Display: function () {
                    return "Model of Car is: " + this.model + " " + "and Year is: " + this.year
                }
            }
            return `Object Created is: ${JSON.stringify(obj)} and Output of Display Function: ${obj.Display()}`
        }
    },
    {
        question: `19. Write a function that checks if a given object contains a specific property.`,
        answer: function () {
            var property = window.prompt("Enter Property to Check")
            var obj = { name: "Alice", age: 25 }
            for (Key in obj) {
                if (Key == property) {
                    return `Entered Property is: ${property} and Object Used is: ${JSON.stringify(obj)}` + true
                } else {
                    return `Entered Property is: ${property} and Object Used is: ${JSON.stringify(obj)}` + false
                }
            }
        }
    },
    {
        question: `20. Write a function to count the number of vowels (a, e, i, o, u) in a string, regardless of case. `,
        answer: function () {
            var str = window.prompt("Enter String to Check")
            let vowels = ['a', 'e', 'i', 'o', 'u']
            var count = 0;
            var chars = str.toLowerCase().split("")
            chars.map((e) => {
                if (vowels.includes(e)) {
                    count++
                }
            })
            return `String Entered is: ${str} and Vowels Count is: ${count}`
        }
    },
    {
        question: `21. Write a function that splits a string into an array of words based on spaces.`,
        answer: function () {
            var str = window.prompt("Enter String To be Reversed")
            return `Entered String: ${str} and its array of words is: [${str.split(" ")}]`
        }
    },
    {
        question: `22. Write a function that performs a mathematical operation (+ ,  -, * ,  / ) on two numbers.`,
        answer: function () {
            var num1 = Number(window.prompt("Enter First Number"))
            var num2 = Number(window.prompt("Enter Second Number"))
            var operation = window.prompt("Enter Operation")
            switch (operation) {
                case "+":
                    return `First Number Entered is ${num1} and Second Number Entered is ${num2} and operation is: ${operation} So result is: ` + (num1 + num2);
                case "-":
                    return `First Number Entered is ${num1} and Second Number Entered is ${num2} and operation is: ${operation} So result is: ` + (num1 - num2);
                case "*":
                    return `First Number Entered is ${num1} and Second Number Entered is ${num2} and operation is: ${operation} So result is: ` + (num1 * num2);
                case "/":
                    return num2 !== 0 ? `First Number Entered is ${num1} and Second Number Entered is ${num2} and operation is: ${operation} So result is: ` + (num1 / num2) : "Denominator cannot be zero";
                default:
                    return "Invalid operation";
            }
        }
    },
];

function handleBoxClick(boxId) {
    const questionObj = questionsAndAnswers[boxId - 1];

    if (questionObj) {

        document.getElementById('question').textContent = questionObj.question;
        if (typeof questionObj.answer === 'function') {
            document.getElementById('answer').textContent = questionObj.answer();
        } else {
            document.getElementById('answer').textContent = questionObj.answer;
        }
    } else {
        document.getElementById('question').textContent = "Question not found!";
        document.getElementById('answer').textContent = "";
    }
}

for (let i = 1; i <= 22; i++) {
    const box = document.getElementById(`box${i}`);
    if (box) {
        box.addEventListener('click', () => handleBoxClick(i));
    }
}


//! Q1
// const Q1 = '1. Create a function that calculates the sum of two given numbers.'

// var num1, num2;
// num1 = Number(window.prompt('Enter First Number'))
// num2 = Number(window.prompt('Enter Second Number'))
// var sum = (num1, num2) => {
//     if(num1 && num2){
//         return num1 + num2
//     }else{
//         alert('Please Enter Numbers')
//         return 'Please Enter Numbers'
//     }
// }
// console.log(sum(num1, num2));

//! Q2

// const Q2 = `2. Write a function that checks if a number is prime (a number that can only be divided
// by 1 and itself without any remainder).`
// var num1 = Number(window.prompt('Enter Number To Check'))
// var isPrime = (num1) => {
//     if (num1) {
//         if (num1 % num1 == 0 && num1% 1 ==0) {
//             console.log(num1 + " " + 'is prime Number');
//             return true
//         }else{
//             return false
//         }
//     }else{
//         return 'Please Enter A Number'
//     }
// }
// console.log(isPrime(num1));

//! Q3
// var str = window.prompt("Enter String to Reverse")
// console.log(str.length);
// var Reverse = (str1) => {
//     return str1.split("").reverse().join("");
// }
// console.log(Reverse(str));


//! Q4
// var numArray = [1, 2, 3, 4, 5, 6, 30];
// var LargeNo = (array) => {
//     var Largest = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > Largest) {
//             Largest = array[i];
//         }
//     }
//     return Largest;
// }
// console.log(LargeNo(numArray));


//! Q5
// var numArray=[15,20,30,25,3,5,2,6,8,10]
// var EvenFilter = (array)=>{
//     var EvenNo=[]
//     for(let i=0; i< array.length ; i++){
//         if(array[i]%2 == 0){
//             EvenNo.push(array[i])
//         }
//     }
//     return EvenNo
// }
// console.log(EvenFilter(numArray));

//! Q6

// var str = window.prompt("Enter String To be Reversed")
// var Reverse = (str) => {
//     let reversedString = ''
//     let stringArray = str.split('')
//     for (let i = stringArray.length - 1; i >= 0; i--) {
//         reversedString += stringArray[i]
//     }
//     return reversedString
// }
// console.log(Reverse(str));

//! Q7

// var numArray = [1, 2, 3, 4, 5]
// var Average = (array) => {
//     if(array.length != 0){
//         var sum =0;
//         for(let i =0; i<array.length ; i++){
//             sum+=array[i]
//         }
//         var avg = sum/array.length;
//         return avg
//     }else{
//         return 'array is Empty'
//     }
// }
// console.log(Average(numArray));


//! Q8

// var WeekEndorDay = (number) => {
//     if (number < 1 || number > 7) {
//         return 'number must be between 1 & 7'
//     } else {
//         //!solution using if
//          if(number == 6 || number == 7){
//              return 'Weekend'
//          }else{
//              return 'weekDay'
//          }
//         //! Solution Using Switch
//          switch (number) {
//              case 6:
//              case 7:
//                  return 'Weekend';
//              default:
//                  return 'Weekday';
//          }
//     }
// }


//! Q9
// var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30, 45, 16]

// var isDivisibleby2or3 = (array) => {
//     var isDivisible = []
//     //! Using For Loop
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0 || array[i] % 3 == 0) {
//             isDivisible.push(array[i])
//         }
//     }
//     //! Using Map
//     array.map((e) => {
//         if (e % 2 == 0 || e % 3 == 0) {
//             isDivisible.push(e)
//         }
//     })
//     return isDivisible
// }
// console.log(isDivisibleby2or3(numArray));


//! Q10

// var findIndex = (array, element) => {
//     if (array.indexOf(element) != -1) {
//         return array.indexOf(element)
//     } else {
//         return -1
//     }
// }
// console.log(findIndex(numArray, 33));
// numArray.map((e) => {
//     if (e % 2 == 0 || e % 3 == 0){
//     }
// })


//!Q11

// var num = 5;
// var factorial = (num) => {
//     var fact = 1;
//     for (let i = 2; i <= num; i++) {
//         fact = fact * i
//     }
//     return fact
// }
// console.log(factorial(5));


//!Q12

// var obj = {
//     name: 'john',
//     age: 30
// }
// var PropertyPrint = (obj) => {
//     var property = []
//     for (key in obj) {
//         property.push(key)
//     }
//     return property
// }
// console.log(PropertyPrint(obj));

//! Q13

// var numArray = [1,2,2,3,4,4,5]
// var Unique =(array) =>{
//     var UniqueArray = []
//     for (let i = 0 ; i<array.length; i++){
//         if(array[i] != array[i+1]){
//             UniqueArray.push(array[i])
//         }
//     }
//     let UniqueArray = array.filter((element, index) => {
//         return element !== array[index + 1];
//     });
//     return UniqueArray
// }
// console.log(Unique(numArray));


//! Q14

// var str = 'hello'
// var count = (str) => {
//     let result = {}
//     for (let i = 0; i < str.length; i++) {
//         let ch = str.charAt(i)
//         if (!result[ch]) {
//             result[ch] = 1;
//         }
//         else {
//             result[ch] += 1
//         }
//     }
//     return result;
// }
// console.log("The occurrence of each letter in given string is:", count(str))





//! Q15

// var numArray = [5, 3, 8, 1, 2]
// var Sort = (array) => {
//     return array.sort((a, b) => a - b); // Sorting in ascending order
// };
// console.log(Sort(numArray));

//! Q16

// var isAnagram = (str1,str2)=>{
//     let str1sort = str1.split("").sort().join('').toLowerCase();
//     let str2sort = str2.split("").sort().join('').toLowerCase();
//     return (str1sort === str2sort)
// }

// console.log(isAnagram("listen","silemt"));

//! Q17

// var array = [0, false, "Hello", "", null, undefined, NaN, 42]
// var filter = (array)=>{
//     var Filtered;
//     return Filtered = array.filter((element) => ![0, false, null,"", undefined, NaN].includes(element))
// }
// console.log(filter(array));


//! Q18

// var CarObj = (model,year) =>{
//     var obj = {
//         model : model,
//         year: year,
//         Display: function(){
//             return "Model of Car is: " + this.model + " " + "and Year is: " + this.year
//         }
//     }
//     return obj
// }
// console.log(CarObj("Toyota",2020).Display());

//! Q19

// var obj = {name: "Alice" , age:25}
// var containsProperty = (object , property)=>{
//     for(Key in object){
//         if(Key == property){
//             return true
//         }else{
//             return false
//         }
//     }
// }
// console.log(containsProperty(obj,"address"));

//! Q20

// var str = "Hello World"
// var VowelsCount = (str)=>{
//     let vowels = ['a','e','i','o','u']
//     var count = 0;
//     var chars = str.toLowerCase().split("")
//     console.log(chars);
//     chars.map((e)=>{
//         if(vowels.includes(e)){
//             count++
//         }
//     })
//     return count
// }
// console.log(VowelsCount(str));


//! Q21

// var str = "the quick brown fox"
// var splitbased = (str) => {
//     return str.split(" ")
// }

// console.log(splitbased(str));



//! Q22

// var MathOperation = (num1, num2, operation) => {
//     switch (operation) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num2 !== 0 ? num1 / num2 : "Denominator cannot be zero";
//         default:
//             return "Invalid operation";
//     }
// };

// console.log(MathOperation(5,3,"%"));
