import $ from "jquery";
import { updateFireDisplay } from './main.js';

export class Game {
  constructor() {
    this.fuelTimer = {};
    this.foodTimer;
    this.fuel = 0;
    this.fed = 0;
  }

  startGame() {
    this.fuel = 30;
    this.fed = 10;
    setInterval(() => {
      this.fuel--;
      updateFireDisplay(this.fuel);
      if (this.fuel <= 0) {
        //game end
      }
    }, 5000);
  }
  
  chopWood() {
    
    this.fuelTimer.currentAccuracy = Math.abs(this.fuelTimer.intervals - 100);
    if (this.fuelTimer.currentAccuracy > 80) {
      this.fuel += 4;
    }
    if (this.fuel > 30) {
      this.fuel = 30;
    }
    updateFireDisplay(this.fuel);
    console.log(this.fuelTimer.currentAccuracy)
    console.log("fuelTimer: " + this.fuelTimer.intervals)
  }

  runAccuracyClock() {
    setInterval(() => {
      this.fuelTimer.intervals++;
      if (this.fuelTimer.intervals > 200) {
        this.fuelTimer.intervals = 1;
      }
      $("#timer").text(`${this.fuelTimer.intervals}`);
      }, 10);


}
}
export class fuelTimer {
  constructor() {
  this.intervals = 150;
  this.currentAccuracy;
  }
}

// //


// export class fuelTimer {
//   constructor() {
//     this.intervals = 0;
//     setInterval(this.runClock(), 10);
//   }

//   runClock() {
//     this.intervals++;
//     if (this.intervals > 100) {
//       this.intervals = 1;
//   }
// }
// }