namespace laba6 {

    function sealed(constructor: Function) {
        console.log("sealed decorator");
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }

    function upperCase(target: Object, method: string, descriptor: PropertyDescriptor){

        let originalMethod = descriptor.value;

        descriptor.value = function(...args: number[]) {
            let returnValue = originalMethod.apply(this, args);
            return returnValue.toUpperCase();
        }
    }

    enum Documents {
        PASPORT = "Pasport",
        SNILS = "Snils"
    }
    
    interface IOwner {
        firstName: string;
        lastName: string;
        surname: string;
        typeDocument: Documents;
        seriesDocument: number;
        numberDocument: number;
        birthDate: Date;
        Info: () => string;
    }
    
    class Owner implements IOwner {
        private _firstName: string;
        private _lastName: string;
        private _surname: string;
        private _typeDocument: Documents;
        private _seriesDocument: number;
        private _numberDocument: number;
        private _birthDate: Date;
    
        constructor(firstName: string, lastName: string, 
            surname: string, typeDocument: Documents, 
            seriesDocument: number, numberDocument: number, birthDate: Date) {
            this._firstName = firstName;
            this._lastName = lastName;
            this._surname = surname;
            this._typeDocument = typeDocument;
            this._seriesDocument = seriesDocument;
            this._numberDocument = numberDocument;
            this._birthDate = birthDate;
        }
    
        @upperCase
        Info(): string {
            return 'FullName: ' + this._firstName + ' ' + this._lastName + ' ' + this._surname +
            '\n Document: ' + this._typeDocument.toString() +
            '\n Series of Document: ' + this.seriesDocument.toString() +
            '\n Number of Document: ' + this.numberDocument.toString() +
            '\n Birth Date: ' + this.birthDate.toString();
        }
    
        get firstName(): string {
            return this._firstName;
        }
        set firstName(value: string) {
            this._firstName = value;
        }
    
        get lastName(): string {
            return this._lastName;
        }
        set lastName(value: string) {
            this._lastName = value;
        }
    
        get surname(): string {
            return this._surname;
        }
        set surname(value: string) {
            this._surname = value;
        }
    
        get typeDocument(): Documents {
            return this._typeDocument;
        }
        set typeDocument(value: Documents) {
            this._typeDocument = value;
        }
    
        get seriesDocument(): number {
            return this._seriesDocument;
        }
        set seriesDocument(value: number) {
            this._seriesDocument = value;
        }
    
        get numberDocument(): number {
            return this._numberDocument;
        }
        set numberDocument(value: number) {
            this._numberDocument;
        }
    
        get birthDate(): Date {
            return this._birthDate;
        }
        set birthDate(value: Date) {
            this._birthDate = value;
        }
    }
        

    interface IVehicle {
        marka: string;
        model: string;
        dataCreating: Date;
        vin: number;
        registerNumber: number;
        Info: () => string;
        owner: IOwner;
    }
    
    class Vehicle implements IVehicle {
        private _marka: string;
        private _model: string;
        private _dataCreating: Date;
        private _vin: number;
        private _registerNumber: number;
        private _owner: IOwner;
    
        constructor(_marka: string, _model: string, 
            _dataCreating: Date, _vin: number, 
            _registerNumber: number, _owner: IOwner) {
            this._marka = _marka;
            this._model = _model;
            this._dataCreating = _dataCreating;
            this._vin = _vin;
            this._registerNumber = _registerNumber;
            this._owner = _owner;
        }
    
        @upperCase
        Info(): string {
            return 'Marka: ' + this._marka +
            '\n Model: ' + this._model +
            '\n Data of Creating: ' + this._dataCreating.toString() +
            '\n VIN: ' + this._vin +
            '\n Register Number: ' + this._registerNumber;
        }
    
        get marka(): string {
            return this._marka;
        }
        set marka(value: string) {
            this._marka = value;
        }
    
        get model(): string {
            return this._model;
        }
        set model(value: string) {
            this._model = value;
        }
    
        get dataCreating(): Date {
            return this._dataCreating;
        }
        set dataCreating(value: Date) {
            this._dataCreating = value;
        }
    
        get vin(): number {
            return this._vin;
        }
        set vin(value: number) {
            this._vin = value;
        }
    
        get registerNumber(): number {
            return this._registerNumber;
        }
        set registerNumber(value: number) {
            this._registerNumber = value;
        }
    
        get owner(): IOwner {
            return this._owner;
        }
        set owner(value: IOwner) {
            this._owner = value;
        }
    }

    enum typesKyzov {
        SEDAN = "Sedan",
        COUPE = "Coupe"
    }
    
    enum classesCar {
        A = "A",
        B = "B",
        C = "C"
    }
    
    interface IAutomobile extends Vehicle {
        classCar: classesCar;
        typeKyzov: typesKyzov;
    } 
    
    @sealed
    class Automobile extends Vehicle implements IAutomobile {
        private _classCar: classesCar;
        private _typeKyzov: typesKyzov;
    
        constructor(_marka: string, _model: string, _dataCreating: Date, _vin: number,
            _registerNumber: number, _owner: IOwner, _classCar: classesCar, _typeKyzov: typesKyzov) {
            super(_marka, _model, _dataCreating, _vin, _registerNumber, _owner);
            this._classCar = _classCar;
            this._typeKyzov = _typeKyzov;
        }
    
        @upperCase
        Info(): string {
            return 'Marka: ' + this.marka +
            '\n Model: ' + this.model +
            '\n Data of Creating: ' + this.dataCreating.toString() +
            '\n VIN: ' + this.vin +
            '\n Register Number: ' + this.registerNumber +
            '\n ClassCar: ' + this._classCar +
            '\n Type of Kyzov: ' + this._typeKyzov;
        }
    
        get classCar(): classesCar {
            return this._classCar;
        }
        set classCar(value: classesCar) {
            this._classCar = value;
        }
    
        get typeKyzov(): typesKyzov {
            return this._typeKyzov;
        }
        set typeKyzov(value: typesKyzov) {
            this._typeKyzov = value;
        }
    }
    
    //Object.defineProperty(Automobile, 'age', { value: 5}); //Произойдет ошибка!!!
    
    const people: IOwner = new Owner("Semen", "Mel", "Dmi", Documents.PASPORT, 1234, 4321, new Date());
    const MyAuto: Automobile = new Automobile("BMW", "new", new Date(), 123, 321, people, classesCar.A, typesKyzov.COUPE);
    console.log(MyAuto.Info());
}