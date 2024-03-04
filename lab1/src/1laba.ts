let subtract = (a: number, b: number) => {
    return a-b;
};
 
let sub: (x:number, y:number) => number;
 
sub = subtract;
console.log(sub(6, 4));
console.log(sub(10, 2));
console.log(sub(22, 2));

const x: number = 5; 
const y: number = 6;
const hello: string = "hello world";
const isValid: boolean = true;
const BigNum: bigint = BigInt(100);
const someVar: any = "hello";
const Kortez: unknown = [x, hello, isValid];
const Arr: number[][] = [];

interface _Entity {
    id: number;
}

interface _ToJsonStringify extends _Entity {
    e1: number;
    e2: number;
}

const MyData: _ToJsonStringify = {
    id: 5,
    e1: 12345,
    e2: 999,
}

const _jsonStringify: string = JSON.stringify(MyData);

console.log(_jsonStringify);

const _someObject = JSON.parse(_jsonStringify);

console.log(_someObject);