namespace laba7 {
export enum Documents {
    PASPORT = "Pasport",
    SNILS = "Snils"
}

export interface IOwner {
    firstName: string;
    lastName: string;
    surname: string;
    typeDocument: Documents;
    seriesDocument: number;
    numberDocument: number;
    birthDate: Date;
    Info: () => string;
}

export class Owner implements IOwner {
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

export interface IVehicle {
    marka: string;
    model: string;
    dataCreating: Date;
    vin: number;
    registerNumber: number;
    Info: () => string;
    SpecialInfo(): string;
    owner: IOwner;
}

export class Vehicle implements IVehicle {
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

    Info(): string {
        return 'Marka: ' + this._marka +
        '\n Model: ' + this._model +
        '\n Data of Creating: ' + this._dataCreating.toString() +
        '\n VIN: ' + this._vin +
        '\n Register Number: ' + this._registerNumber;
    }

    SpecialInfo(): string {
        return JSON.stringify(this._vin) + "\n" + JSON.stringify(this._registerNumber) + "\n" + 
        JSON.stringify(this._owner.firstName) + " " + JSON.stringify(this._owner.surname) + " " + JSON.stringify(this._owner.lastName);
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

export enum typesKyzov {
    SEDAN = "Sedan",
    COUPE = "Coupe"
}

export enum classesCar {
    A = "A",
    B = "B",
    C = "C"
}

export interface IAutomobile extends Vehicle {
    classCar: classesCar;
    typeKyzov: typesKyzov;
} 

export class Automobile extends Vehicle implements IAutomobile {
    private _classCar: classesCar;
    private _typeKyzov: typesKyzov;

    constructor(_marka: string, _model: string, _dataCreating: Date, _vin: number,
        _registerNumber: number, _owner: IOwner, _classCar: classesCar, _typeKyzov: typesKyzov) {
        super(_marka, _model, _dataCreating, _vin, _registerNumber, _owner);
        this._classCar = _classCar;
        this._typeKyzov = _typeKyzov;
    }

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

export interface IMotorbike extends Vehicle {
    typeFrame: string;
    forSport: boolean;
} 

export class Motorbike extends Vehicle implements IMotorbike {
    private _typeFrame: string;
    private _forSport: boolean;

    constructor(_marka: string, _model: string, _dataCreating: Date, _vin: number,
        _registerNumber: number, _owner: IOwner, _typeFrame: string, _forSport: boolean) {
        super(_marka, _model, _dataCreating, _vin, _registerNumber, _owner);
        this._typeFrame = _typeFrame;
        this._forSport = _forSport;
    }

    Info(): string {
        return 'Marka: ' + this.marka +
        '\n Model: ' + this.model +
        '\n Data of Creating: ' + this.dataCreating.toString() +
        '\n VIN: ' + this.vin +
        '\n Register Number: ' + this.registerNumber +
        '\n Type of Frame: ' + this._typeFrame +
        '\n For Sport: ' + this._forSport.toString();
    }

    get typeFrame(): string {
        return this._typeFrame;
    }
    set typeFrame(value: string) {
        this._typeFrame = value;
    }

    get forSport(): boolean {
        return this._forSport;
    }
    set forSport(value: boolean) {
        this._forSport = value;
    }
}

export interface IVehicleStorage<T extends IVehicle> {
    created: Date;
    data: T[];
    getAll: () => T[];

    save(data: T): void;

    remove(index: number): void;

    printAllMarks(): void;

    printAllModels(): void;

    sorting(): void;

    filter(strEnd: string): T[];
}

export class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
    private readonly _created: Date;
    private _data: T[];
    private _size: number;

    get created(): Date {
        return this._created;
    }

    get data(): T[] {
        return this._data;
    }

    public get size(): number {
        return this._size;
    }

    constructor() {
        this._created = new Date();
        this._data = [];
        this._size = 0;
    }

    getAll(): T[] {
        return this.data;
    }

    remove(index: number): void {
        this._data = this.data.splice(index, 1);
        this._size--;
    }

    save(data: T): void {
        this._data.push(data);
        this._size++;
    }

    printAllMarks(): void {
        for(let i = 0; i < this._data.length; i++) {
            console.log(this._data[i].marka);
        }
    }

    printAllModels(): void {
        for(let i = 0; i < this._data.length; i++) {
            console.log(this._data[i].model);
        }
    }

    sorting(): void {
        for (let j = this._size - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                if (this._data[i].marka > this._data[i + 1].marka) {
                    let temp = this._data[i];
                    this._data[i] = this._data[i + 1];
                    this._data[i + 1] = temp;
                }
            }
        }
    }

    filter(strEnd: string): T[] {
        let result: T[] = [];

        for(let i = 0; i < this._size; i++) {
            let j = this._data[i].model.length - 1;
            let k = strEnd.length - 1;
            let isEqual = true;

            while(j >= 0 && k >= 0) {
                if(this._data[i].model[j] != strEnd[k])
                    isEqual = false;

                j--;
                k--;
            }

            if(isEqual)
                result.push(this._data[i]);
        }

        return result;
    }
}

const people: IOwner = new Owner("Semen", "Mel", "Dmi", Documents.PASPORT, 1234, 4321, new Date());
    
const MyAuto: IAutomobile = new Automobile("BMW", "new", new Date(), 123, 321, people, classesCar.A, typesKyzov.COUPE);
const MyAuto2: IAutomobile = new Automobile("Toyota", "old", new Date(), 777, 777, people, classesCar.B, typesKyzov.SEDAN);
const MyAuto3: IAutomobile = new Automobile("Mazda", "very old", new Date(), 777, 777, people, classesCar.B, typesKyzov.SEDAN);
const MyAuto4: IAutomobile = new Automobile("Ford", "old", new Date(), 777, 777, people, classesCar.B, typesKyzov.SEDAN);
    
const automobileStorage: IVehicleStorage<IAutomobile> = new VehicleStorage();

automobileStorage.save(MyAuto);
automobileStorage.save(MyAuto2);
automobileStorage.save(MyAuto3);
automobileStorage.save(MyAuto4);

automobileStorage.printAllMarks();
console.log("//////");
automobileStorage.sorting();
automobileStorage.printAllMarks();


console.log("");
automobileStorage.printAllModels();
console.log("//////");
let arr: IAutomobile[] = automobileStorage.filter("ld");
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].model);
}

console.log("");
const MyVehicle: IVehicle = new Vehicle("BMW", "new", new Date(), 123, 321, people);
console.log(MyVehicle.SpecialInfo());

}