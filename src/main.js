import 'bootstrap';
import './styles.css';
import $ from "jquery";
import { Game, fuelTimer } from './survival';

export function updateFireDisplay(fuelLevel) {
  $("#fuel").text(fuelLevel)
  document.getElementById("fireimg").style.opacity = (fuelLevel/30);
}

export function gameOver() {
  $("#gameover").show();
}

export function toggleFood() {
  $("#food").toggle();
}


$(document).ready(function () {
  let game = new Game;
  let timer = new fuelTimer;
  game.fuelTimer = timer;
  game.runAccuracyClock();
  game.startGame();
  game.foodGame();


  $("#fireimg").on('click', function(){
    $("#chopMiniGame").animate({height: "toggle"}, 500);
  });

  //Accuracy Check
  $("#chopMiniGame").on('click', function(){
    game.chopWood();    
  });

  $("#food").on("click", function() {
    game.fed += 4;
    $("#food").hide();
  });
})


