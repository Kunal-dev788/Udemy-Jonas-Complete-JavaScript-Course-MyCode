/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
  };
  
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  const EV = function(make,speed,charge){
      Car.call(this,make,speed);
      this.charge = charge;
  }
  
  // Linking the prototype of EV to Car so we can use their methods
  // Object -> Child -> Parent ===> Right and Proper Way
  EV.prototype = Object.create(Car.prototype);
  
  // Object -> Parent  Wrong Way because Child Prototype Skip
  // EV.prototype = Car.prototype;
  
  EV.prototype.chargeBattery = function(chargeTo){
      this.charge = chargeTo;
      console.log(this.charge);
  }
  
  EV.prototype.accelerate = function(){
      this.speed += 20;
      this.charge -= 1;
      console.log(`${this.make} is going at ${this.speed} km/h with ${this.charge} Battery`);
  }
  
  const Tesla = new EV("Tesla",120,36);
  console.log(Tesla);
  Tesla.accelerate();
  Tesla.brake();
  Tesla.chargeBattery(90);
*/

/*
class Car {

  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

}

class EV extends Car {

  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(this.charge);
  }

  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h with ${this.charge} Battery`);
  }

}

const Tesla = new EV("Tesla",120,36);
console.log(Tesla);
Tesla.accelerate();
Tesla.brake();
Tesla.chargeBattery(90);
*/

class Car {

  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

}

class EV extends Car {

  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(this.charge);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h with ${this.charge} Battery`);
    return this;
  }

}

console.log("-------------");
const Rivian = new EV("Rivian", 120, 23);
Rivian.accelerate().brake().chargeBattery(90);