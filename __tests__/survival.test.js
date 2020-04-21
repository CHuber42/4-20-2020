import { fuelTimer, Game } from './../src/survival.js'

describe ('Timer', () => {
  jest.useFakeTimers();
  afterEach(function() {
    jest.clearAllTimers();
  })

test('should create a new Timer object with interval set to 150', () =>{
  let timer = new fuelTimer;
  expect(timer.intervals).toEqual(150);
})

test('should test that timer "intervals" is incrementing correctly', () =>{
  let timer = new fuelTimer;
  let game = new Game;
  game.fuelTimer = timer;
  game.runAccuracyClock();
  jest.advanceTimersByTime(500);
  expect(game.fuelTimer.intervals).toEqual(50);
})

test('should create new game object with fuel value set to 0', () => {
  let game = new Game;
  expect(game.fuel).toEqual(0);

})

test('should run startGame method to make fuel = 30', () =>{
  let game = new Game;
  game.startGame();
  expect(game.fuel).toEqual(30);
})

test('should set fuel to 29 based upon interval', () => {
  let game = new Game;
  game.startGame();
  jest.advanceTimersByTime(5000)
  expect(game.fuel).toEqual(29);
})

})