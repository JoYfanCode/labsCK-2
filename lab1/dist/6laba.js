var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var laba6;
(function (laba6) {
    function sealed(constructor) {
        console.log("sealed decorator");
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
    function upperCase(target, method, descriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let returnValue = originalMethod.apply(this, args);
            return returnValue.toUpperCase();
        };
    }
    let Documents;
    (function (Documents) {
        Documents["PASPORT"] = "Pasport";
        Documents["SNILS"] = "Snils";
    })(Documents || (Documents = {}));
    class Owner {
        constructor(firstName, lastName, surname, typeDocument, seriesDocument, numberDocument, birthDate) {
            this._firstName = firstName;
            this._lastName = lastName;
            this._surname = surname;
            this._typeDocument = typeDocument;
            this._seriesDocument = seriesDocument;
            this._numberDocument = numberDocument;
            this._birthDate = birthDate;
        }
        Info() {
            return 'FullName: ' + this._firstName + ' ' + this._lastName + ' ' + this._surname +
                '\n Document: ' + this._typeDocument.toString() +
                '\n Series of Document: ' + this.seriesDocument.toString() +
                '\n Number of Document: ' + this.numberDocument.toString() +
                '\n Birth Date: ' + this.birthDate.toString();
        }
        get firstName() {
            return this._firstName;
        }
        set firstName(value) {
            this._firstName = value;
        }
        get lastName() {
            return this._lastName;
        }
        set lastName(value) {
            this._lastName = value;
        }
        get surname() {
            return this._surname;
        }
        set surname(value) {
            this._surname = value;
        }
        get typeDocument() {
            return this._typeDocument;
        }
        set typeDocument(value) {
            this._typeDocument = value;
        }
        get seriesDocument() {
            return this._seriesDocument;
        }
        set seriesDocument(value) {
            this._seriesDocument = value;
        }
        get numberDocument() {
            return this._numberDocument;
        }
        set numberDocument(value) {
            this._numberDocument;
        }
        get birthDate() {
            return this._birthDate;
        }
        set birthDate(value) {
            this._birthDate = value;
        }
    }
    __decorate([
        upperCase
    ], Owner.prototype, "Info", null);
    class Vehicle {
        constructor(_marka, _model, _dataCreating, _vin, _registerNumber, _owner) {
            this._marka = _marka;
            this._model = _model;
            this._dataCreating = _dataCreating;
            this._vin = _vin;
            this._registerNumber = _registerNumber;
            this._owner = _owner;
        }
        Info() {
            return 'Marka: ' + this._marka +
                '\n Model: ' + this._model +
                '\n Data of Creating: ' + this._dataCreating.toString() +
                '\n VIN: ' + this._vin +
                '\n Register Number: ' + this._registerNumber;
        }
        get marka() {
            return this._marka;
        }
        set marka(value) {
            this._marka = value;
        }
        get model() {
            return this._model;
        }
        set model(value) {
            this._model = value;
        }
        get dataCreating() {
            return this._dataCreating;
        }
        set dataCreating(value) {
            this._dataCreating = value;
        }
        get vin() {
            return this._vin;
        }
        set vin(value) {
            this._vin = value;
        }
        get registerNumber() {
            return this._registerNumber;
        }
        set registerNumber(value) {
            this._registerNumber = value;
        }
        get owner() {
            return this._owner;
        }
        set owner(value) {
            this._owner = value;
        }
    }
    __decorate([
        upperCase
    ], Vehicle.prototype, "Info", null);
    let typesKyzov;
    (function (typesKyzov) {
        typesKyzov["SEDAN"] = "Sedan";
        typesKyzov["COUPE"] = "Coupe";
    })(typesKyzov || (typesKyzov = {}));
    let classesCar;
    (function (classesCar) {
        classesCar["A"] = "A";
        classesCar["B"] = "B";
        classesCar["C"] = "C";
    })(classesCar || (classesCar = {}));
    let Automobile = class Automobile extends Vehicle {
        constructor(_marka, _model, _dataCreating, _vin, _registerNumber, _owner, _classCar, _typeKyzov) {
            super(_marka, _model, _dataCreating, _vin, _registerNumber, _owner);
            this._classCar = _classCar;
            this._typeKyzov = _typeKyzov;
        }
        Info() {
            return 'Marka: ' + this.marka +
                '\n Model: ' + this.model +
                '\n Data of Creating: ' + this.dataCreating.toString() +
                '\n VIN: ' + this.vin +
                '\n Register Number: ' + this.registerNumber +
                '\n ClassCar: ' + this._classCar +
                '\n Type of Kyzov: ' + this._typeKyzov;
        }
        get classCar() {
            return this._classCar;
        }
        set classCar(value) {
            this._classCar = value;
        }
        get typeKyzov() {
            return this._typeKyzov;
        }
        set typeKyzov(value) {
            this._typeKyzov = value;
        }
    };
    __decorate([
        upperCase
    ], Automobile.prototype, "Info", null);
    Automobile = __decorate([
        sealed
    ], Automobile);
    //Object.defineProperty(Automobile, 'age', { value: 5}); //Произойдет ошибка!!!
    const people = new Owner("Semen", "Mel", "Dmi", Documents.PASPORT, 1234, 4321, new Date());
    const MyAuto = new Automobile("BMW", "new", new Date(), 123, 321, people, classesCar.A, typesKyzov.COUPE);
    console.log(MyAuto.Info());
})(laba6 || (laba6 = {}));
