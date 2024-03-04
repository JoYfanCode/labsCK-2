import {Transport} from "./4laba";

import Documents = Transport.Documents;
import IOwner = Transport.IOwner;
import Owner = Transport.Owner;
import IVehicle = Transport.IVehicle;
import Vehicle = Transport.Vehicle;
import typesKyzov = Transport.typesKyzov;
import classesCar = Transport.classesCar;
import IAutomobile = Transport.IAutomobile;
import Automobile = Transport.Automobile;
import IMotorbike = Transport.IMotorbike;
import Motorbike = Transport.Motorbike;
import IVehicleStorage = Transport.IVehicleStorage;
import VehicleStorage = Transport.VehicleStorage;

const people: IOwner = new Owner("Semen", "Mel", "Dmi", Documents.PASPORT, 1234, 4321, new Date());
const MyVehicle: IVehicle = new Vehicle("BMW", "new", new Date(), 123, 321, people);
    
const MyAuto: IAutomobile = new Automobile("BMW", "new", new Date(), 123, 321, people, classesCar.A, typesKyzov.COUPE);
const MyAuto2: IAutomobile = new Automobile("BMW", "new", new Date(), 777, 777, people, classesCar.B, typesKyzov.SEDAN);
    
    
console.log(people.Info());
console.log("/////");
console.log(MyVehicle.Info());
console.log("/////");
console.log(MyAuto.Info());
    
    
const automobileStorage: IVehicleStorage<IAutomobile> = new VehicleStorage();
automobileStorage.save(MyAuto);
automobileStorage.save(MyAuto2);
console.log(automobileStorage.getAll());