var laba7;
(function (laba7) {
    let Documents;
    (function (Documents) {
        Documents["PASPORT"] = "Pasport";
        Documents["SNILS"] = "Snils";
    })(Documents = laba7.Documents || (laba7.Documents = {}));
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
    laba7.Owner = Owner;
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
        SpecialInfo() {
            return JSON.stringify(this._vin) + "\n" + JSON.stringify(this._registerNumber) + "\n" +
                JSON.stringify(this._owner.firstName) + " " + JSON.stringify(this._owner.surname) + " " + JSON.stringify(this._owner.lastName);
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
    laba7.Vehicle = Vehicle;
    let typesKyzov;
    (function (typesKyzov) {
        typesKyzov["SEDAN"] = "Sedan";
        typesKyzov["COUPE"] = "Coupe";
    })(typesKyzov = laba7.typesKyzov || (laba7.typesKyzov = {}));
    let classesCar;
    (function (classesCar) {
        classesCar["A"] = "A";
        classesCar["B"] = "B";
        classesCar["C"] = "C";
    })(classesCar = laba7.classesCar || (laba7.classesCar = {}));
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
    laba7.Automobile = Automobile;
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
    laba7.Motorbike = Motorbike;
    class VehicleStorage {
        get created() {
            return this._created;
        }
        get data() {
            return this._data;
        }
        get size() {
            return this._size;
        }
        constructor() {
            this._created = new Date();
            this._data = [];
            this._size = 0;
        }
        getAll() {
            return this.data;
        }
        remove(index) {
            this._data = this.data.splice(index, 1);
            this._size--;
        }
        save(data) {
            this._data.push(data);
            this._size++;
        }
        printAllMarks() {
            for (let i = 0; i < this._data.length; i++) {
                console.log(this._data[i].marka);
            }
        }
        printAllModels() {
            for (let i = 0; i < this._data.length; i++) {
                console.log(this._data[i].model);
            }
        }
        sorting() {
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
        filter(strEnd) {
            let result = [];
            for (let i = 0; i < this._size; i++) {
                let j = this._data[i].model.length - 1;
                let k = strEnd.length - 1;
                let isEqual = true;
                while (j >= 0 && k >= 0) {
                    if (this._data[i].model[j] != strEnd[k])
                        isEqual = false;
                    j--;
                    k--;
                }
                if (isEqual)
                    result.push(this._data[i]);
            }
            return result;
        }
    }
    laba7.VehicleStorage = VehicleStorage;
    const people = new Owner("Semen", "Mel", "Dmi", Documents.PASPORT, 1234, 4321, new Date());
    const MyAuto = new Automobile("BMW", "new", new Date(), 123, 321, people, classesCar.A, typesKyzov.COUPE);
    const MyAuto2 = new Automobile("Toyota", "old", new Date(), 777, 777, people, classesCar.B, typesKyzov.SEDAN);
    const MyAuto3 = new Automobile("Mazda", "very old", new Date(), 777, 777, people, classesCar.B, typesKyzov.SEDAN);
    const MyAuto4 = new Automobile("Ford", "old", new Date(), 777, 777, people, classesCar.B, typesKyzov.SEDAN);
    const automobileStorage = new VehicleStorage();
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
    let arr = automobileStorage.filter("ld");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].model);
    }
    console.log("");
    const MyVehicle = new Vehicle("BMW", "new", new Date(), 123, 321, people);
    console.log(MyVehicle.SpecialInfo());
})(laba7 || (laba7 = {}));
