declare function log(target: Object, method: string, descriptor: PropertyDescriptor): void;
declare class Calculator {
    add(x: number, y: number): number;
}
declare let calc: Calculator;
declare let z: number;
