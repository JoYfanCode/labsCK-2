var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, method, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(JSON.stringify(args));
        let returnValue = originalMethod.apply(this, args);
        console.log(`${JSON.stringify(args)} => ${returnValue}`);
        return returnValue;
    };
}
class Calculator {
    add(x, y) {
        return x + y;
    }
}
__decorate([
    log
], Calculator.prototype, "add", null);
let calc = new Calculator();
let z = calc.add(4, 5);
//z = calc.add(6, 7);
