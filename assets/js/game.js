var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack)

var fight = function() {
  //alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
  window.alert("Get ready for a battle");

  //subtract the calue of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    

  //log a resulting message to the console so that we know it worked.
  

  //check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " did not survive your brutal attacks!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

  //subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

  //log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
  
    if (playerHealth <= 0) {
      window.alert(playerName + "did not survive the brutal attacks of " + enemyName + " .");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  };
fight();