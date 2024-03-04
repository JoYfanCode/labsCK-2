var Documents;
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
var typesKyzov;
(function (typesKyzov) {
    typesKyzov["SEDAN"] = "Sedan";
    typesKyzov["COUPE"] = "Coupe";
})(typesKyzov || (typesKyzov = {}));
var classesCar;
(function (classesCar) {
    classesCar["A"] = "A";
    classesCar["B"] = "B";
    classesCar["C"] = "C";
})(classesCar || (classesCar = {}));
class Automobile extends Vehicle {
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
}
class Motorbike extends Vehicle {
    constructor(_marka, _model, _dataCreating, _vin, _registerNumber, _owner, _typeFrame, _forSport) {
        super(_marka, _model, _dataCreating, _vin, _registerNumber, _owner);
        this._typeFrame = _typeFrame;
        this._forSport = _forSport;
    }
    Info() {
        return 'Marka: ' + this.marka +
            '\n Model: ' + this.model +
            '\n Data of Creating: ' + this.dataCreating.toString() +
            '\n VIN: ' + this.vin +
            '\n Register Number: ' + this.registerNumber +
            '\n Type of Frame: ' + this._typeFrame +
            '\n For Sport: ' + this._forSport.toString();
    }
    get typeFrame() {
        return this._typeFrame;
    }
    set typeFrame(value) {
        this._typeFrame = value;
    }
    get forSport() {
        return this._forSport;
    }
    set forSport(value) {
        this._forSport = value;
    }
}
class VehicleStorage {
    get created() {
        return this._created;
    }
    get data() {
        return this._data;
    }
    constructor() {
        this._created = new Date();
        this._data = [];
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        this._data = this.data.splice(index, 1);
    }
    save(data) {
        this._data.push(data);
    }
}
const people = new Owner("Semen", "Mel", "Dmi", Documents.PASPORT, 1234, 4321, new Date());
const MyVehicle = new Vehicle("BMW", "new", new Date(), 123, 321, people);
const MyAuto = new Automobile("BMW", "new", new Date(), 123, 321, people, classesCar.A, typesKyzov.COUPE);
const MyAuto2 = new Automobile("BMW", "new", new Date(), 777, 777, people, classesCar.B, typesKyzov.SEDAN);
console.log(people.Info());
console.log("/////");
console.log(MyVehicle.Info());
console.log("/////");
console.log(MyAuto.Info());
const automobileStorage = new VehicleStorage();
automobileStorage.save(MyAuto);
automobileStorage.save(MyAuto2);
console.log(automobileStorage.getAll());
