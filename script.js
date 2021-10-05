// 1

let cars = ["audi","bmw", "lexus", "volkswagen", "porsche", "audi"];

for(let i=1;i<cars.length;i++){
    console.log(cars[i]);
    }

// 2

let names = ["nini", "demetre", "alex", "ana", "gio", "luka"]

for(let i=0;i<names.length;i++){
    if(names[i].length>3) console.log(names[i]);
}

// 3

let numbers = [3, 4, 15,37, 42, 67, 70]

for(let i=0;i<numbers.length;i++){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i]);
    }
}

for(let i=0;i<numbers.length;i++){
    if(numbers[i] % 2 == 1){
        console.log(numbers[i]);
    }
}

// 4

let numbers= [15, 67, 100, 5, 7, [80, 500]]; 

console.log(numbers[5][1]);
console.log()

// 5

var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };

console.log(person["eyecolor"]);

// 6

let numbers= [7, 14, 27, 44, 67,89]

for(let y of numbers){
    if(y>6) {
        console.log(y);
    }
}

let i=0;
while(i<numbers.length;){
    console.log(numbers[i]);   
}

numbers.forEach(function(item){
    console.log(item);
}

// 7

let names= ["sandro", "data", "mariami", "anano", "nika"]

if(names.length===5&&names[names.length-1]==="nika") console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");

if(names.length===7||names[0]==="sandro") console.log("მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო");

