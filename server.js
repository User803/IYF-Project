let num1 = 2;
let num2 = 5;

let sum = num1 + num2;
// console.log("The sum of "+num1+" and "+num2+ " = "+sum);

let word = "Javascript";
let char = "A";
let bool = true;
let floatNum = 1.5;
let doubleNum = 100.5;

// console.log("Welcome to Javascript");
// console.log(word + " " + char + " " + bool + " " + floatNum + " " + doubleNum);
let result = floatNum + doubleNum;
// console.log("Sum of " + floatNum + " and " + doubleNum+ " = " + result);


let length = 10;
let width = 20;
let area = length * width;
// console.log("Area of a rectangle is "+ area);

function areaFunction(length, width) {
    return length * width;    
}
let answer = areaFunction(7, 15);

// console.log(areaFunction(8, 20));
// console.log(answer);

const arrayObj = [
    {
        "name"  : "Jack",
        "age"   : 20,
        "gender": "male"
    },
    {
        "name"  : "Eve",
        "age"   : 19,
        "gender": "female"
    },
    {
        "name"  : "John",
        "age"   : 22,
        "gender": "make"
    }
]

// console.log(arrayObj)
// console.log(arrayObj[0])
// console.log(arrayObj[1])
// console.log(arrayObj[2])

// console.log(arrayObj[0].name)

let totalAge = 0;
let meanAge = 0;
let names = "";
let age = 0;

for (let index = 0; index < arrayObj.length; index++) {
    names = arrayObj[index].name    
    age = arrayObj[index].age    
}

// console.log(names)
// console.log(age)

// Create an array of 10 students each with age. Find total number of age and mean age
const studentsArray = [
    {
        "name"  : "Jack",
        "age"   : 20,
        "gender": "male"
    },
    {
        "name"  : "Jane",
        "age"   : 19,
        "gender": "female"
    },
    {
        "name"  : "John",
        "age"   : 22,
        "gender": "make"
    },
    {
        "name": "Sarah",
        "age": 23,
        "gender": "female"
    },
    {
        "name": "Alex",
        "age": 31,
        "gender": "male"
    },
    {
        "name": "Esther",
        "age": 24,
        "gender": "female"
    },
    {
        "name": "Lee",
        "age": 27,
        "gender": "male"
    },
    {
        "name": "Mary",
        "age": 20,
        "gender": "female"
    },
    {
        "name": "Ethan",
        "age": 35,
        "gender": "male"
    },
    {
        "name": "Doe",
        "age": 26,
        "gender": "male"
    }
]

// Total Age
function totalStudentsAge() {
    let studentsAge = 0;

    for (let index = 0; index < studentsArray.length; index++) {
        studentsAge += studentsArray[index].age;        
    }

    return studentsAge;
}
console.log("Total students age :", totalStudentsAge());

// Mean Age 
function studentsMeanAge() {
    return totalStudentsAge() / studentsArray.length;     
}
console.log("Mean students age :", studentsMeanAge());
