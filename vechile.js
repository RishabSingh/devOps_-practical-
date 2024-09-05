function createVehicleClass() {
    return class Vehicle {
      #make;
      #model;
  
      constructor(make, model) {
        this.#make = make;
        this.#model = model;
      }
  
      getDetails() {
        return `Make: ${this.#make}, Model: ${this.#model}`;
      }
  
      static compareVehicles(vehicle1, vehicle2) {
        return vehicle1.#make === vehicle2.#make && vehicle1.#model === vehicle2.#model;
      }
    }
  }
  
  const Vehicle = createVehicleClass();
  
  class Car extends Vehicle {
    #year;
    #mileage;
  
    constructor(make, model, year, mileage) {
      super(make, model);
      this.#year = year;
      this.#mileage = mileage;
    }
  
    getDetails() {
      return `${super.getDetails()}, Year: ${this.#year}, Mileage: ${this.#mileage}`;
    }
  
    // drive(distance) {
    //   this.#mileage += distance;
    // }
  }
  
  const myCar = new Car("Toyota", "Camry", 2022, 15000);
  
  
  console.log(myCar.getDetails());
  
  
  const anotherCar = new Car("Toyota", "Camry", 2023, 5000);
  
  
  console.log(Vehicle.compareVehicles(myCar, anotherCar));

//   console.log(drive());