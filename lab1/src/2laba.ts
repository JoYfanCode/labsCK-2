const MyArray: number[] = [3, -4, 5, -6, 7];

function FindMaxNegative(arr: number[]) {
    let MaxNegative: number = Number.MIN_SAFE_INTEGER;

    for (let i = 0; arr[i] < arr.length; i++) {
        if(arr[i] < 0 && arr[i] > MaxNegative) {
            MaxNegative = arr[i];
        }
    }

    return MaxNegative;
}

const MaxNegative: number = FindMaxNegative(MyArray);
console.log(MaxNegative);

//const n: number = 3;
//const m: number = 3;
const MyTwoArray: boolean[][] = [[true, false, true], [true, true, true], [false, false, true]];

function ConverArrayToInt(arr: boolean[][]) {
    //let ConvertArray: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    //const m = arr.length;
    //const n = arr[0].length;
    //let newArr = new Array(m).fill(new Array(n).fill(0));
    const newArr = JSON.parse(JSON.stringify(arr));

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j]) {
                newArr[i][j] = 1;
            }
            else {
                newArr[i][j] = 0;
            }
        }
    }

    return newArr;
}

const ConvertArray = ConverArrayToInt(MyTwoArray);

console.log(ConvertArray);

const cort: [number, string, string]= [10, "Hi", "World"];

function ConcatString(cort: [number, string, string]) {
    return cort[1] + cort[2];
}

console.log(ConcatString(cort));

enum aminoacids { 
    GLYCINE ="glycine", 
    LEUCINE = "leucine", 
    LYSINE = "lysine", 
    METHIONINE = "methionine" 
};

console.log(aminoacids.LEUCINE);

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
    infa() {
        return [this.name, this.age];
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
    infa() {
        return [this.label, this.age];
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
   }
}   

const Sharik: Dog = new Dog();
const Tyza: Cat = new Cat();

console.log(Sharik.speak());
console.log(Tyza.speak());
console.log(Sharik.infa());
console.log(Tyza.infa());


interface aminoacid {
    id: string;
    age: number;
    enum1: aminoacids;
    eof: 'NO' | 'YES';
}

const obj1: aminoacid = {
    id: '12345',
    age: 2,
    enum1: aminoacids.LEUCINE,
    eof: null,
}

const jsonObject = JSON.stringify(obj1);
console.log(jsonObject);

const objParsed: aminoacid = JSON.parse(jsonObject) as aminoacid;

console.log(objParsed);