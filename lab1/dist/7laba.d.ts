declare namespace laba7 {
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
        private _firstName;
        private _lastName;
        private _surname;
        private _typeDocument;
        private _seriesDocument;
        private _numberDocument;
        private _birthDate;
        constructor(firstName: string, lastName: string, surname: string, typeDocument: Documents, seriesDocument: number, numberDocument: number, birthDate: Date);
        Info(): string;
        get firstName(): string;
        set firstName(value: string);
        get lastName(): string;
        set lastName(value: string);
        get surname(): string;
        set surname(value: string);
        get typeDocument(): Documents;
        set typeDocument(value: Documents);
        get seriesDocument(): number;
        set seriesDocument(value: number);
        get numberDocument(): number;
        set numberDocument(value: number);
        get birthDate(): Date;
        set birthDate(value: Date);
    }
    interface IVehicle {
        marka: string;
        model: string;
        dataCreating: Date;
        vin: number;
        registerNumber: number;
        Info: () => string;
        SpecialInfo(): string;
        owner: IOwner;
    }
    class Vehicle implements IVehicle {
        private _marka;
        private _model;
        private _dataCreating;
        private _vin;
        private _registerNumber;
        private _owner;
        constructor(_marka: string, _model: string, _dataCreating: Date, _vin: number, _registerNumber: number, _owner: IOwner);
        Info(): string;
        SpecialInfo(): string;
        get marka(): string;
        set marka(value: string);
        get model(): string;
        set model(value: string);
        get dataCreating(): Date;
        set dataCreating(value: Date);
        get vin(): number;
        set vin(value: number);
        get registerNumber(): number;
        set registerNumber(value: number);
        get owner(): IOwner;
        set owner(value: IOwner);
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
    class Automobile extends Vehicle implements IAutomobile {
        private _classCar;
        private _typeKyzov;
        constructor(_marka: string, _model: string, _dataCreating: Date, _vin: number, _registerNumber: number, _owner: IOwner, _classCar: classesCar, _typeKyzov: typesKyzov);
        Info(): string;
        get classCar(): classesCar;
        set classCar(value: classesCar);
        get typeKyzov(): typesKyzov;
        set typeKyzov(value: typesKyzov);
    }
    interface IMotorbike extends Vehicle {
        typeFrame: string;
        forSport: boolean;
    }
    class Motorbike extends Vehicle implements IMotorbike {
        private _typeFrame;
        private _forSport;
        constructor(_marka: string, _model: string, _dataCreating: Date, _vin: number, _registerNumber: number, _owner: IOwner, _typeFrame: string, _forSport: boolean);
        Info(): string;
        get typeFrame(): string;
        set typeFrame(value: string);
        get forSport(): boolean;
        set forSport(value: boolean);
    }
    interface IVehicleStorage<T extends IVehicle> {
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
    class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
        private readonly _created;
        private _data;
        private _size;
        get created(): Date;
        get data(): T[];
        get size(): number;
        constructor();
        getAll(): T[];
        remove(index: number): void;
        save(data: T): void;
        printAllMarks(): void;
        printAllModels(): void;
        sorting(): void;
        filter(strEnd: string): T[];
    }
}
