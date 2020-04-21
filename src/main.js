// import 'bootstrap';


import './styles.css';
import $ from "jquery";
import { Game, Timer } from './survival';

export function updateFireDisplay(fuelLevel) {
  $("#fuel").text(fuelLevel)
  document.getElementById("fireimg").style.opacity = (fuelLevel/30);
}

$(document).ready(function () {
  let game = new Game;
  let timer = new Timer;
  game.fuelTimer = timer;
  game.runAccuracyClock();
  game.startGame();


  $("#fireimg").on('click', function(){
    $("#chopMiniGame").toggle();
  });

  //Accuracy Check
  $("#chopMiniGame").on('click', function(){
    game.chopWood();    
  });

  $("#food").on("click", function() {
    let timeoutDuration = Math.random() * 10000;
    $("#food").hide();
    setTimeout($("#food").show(), timeoutDuration);
  });
})


