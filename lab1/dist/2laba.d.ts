declare const MyArray: number[];
declare function FindMaxNegative(arr: number[]): number;
declare const MaxNegative: number;
declare const MyTwoArray: boolean[][];
declare function ConverArrayToInt(arr: boolean[][]): any;
declare const ConvertArray: any;
declare const cort: [number, string, string];
declare function ConcatString(cort: [number, string, string]): string;
declare enum aminoacids {
    GLYCINE = "glycine",
    LEUCINE = "leucine",
    LYSINE = "lysine",
    METHIONINE = "methionine"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
    infa(): (string | number)[];
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
    infa(): (string | number)[];
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare const Sharik: Dog;
declare const Tyza: Cat;
interface aminoacid {
    id: string;
    age: number;
    enum1: aminoacids;
    eof: 'NO' | 'YES';
}
declare const obj1: aminoacid;
declare const jsonObject: string;
declare const objParsed: aminoacid;
