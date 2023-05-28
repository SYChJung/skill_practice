// function makeCar(color, speed) {
//   const car = {
//     color,
//     speed,
//     run() {
//       console.log(`Runs at ${this.speed}`);
//     },
//   };
//   return car;
// }
class MakeCar {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }
  
  run() {
    console.log(`Runs at ${this.speed}`);
  }
}

// const car1 = makeCar('blue', '100km/h');
const car1 = new MakeCar('blue', '100km/h');

car1.run();