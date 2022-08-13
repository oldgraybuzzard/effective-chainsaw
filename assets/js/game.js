var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack)

var fight = function() {
  //alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
  window.alert("Get ready for a battle");
  
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);

  if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

  //subtract the calue of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
   
  //log a resulting message to the console so that we know it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );


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
    //if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
      //confirm that the player is quitting
      var confirmSkip = window.confirm("Are you sure you want to quit? Quitting will cost you money.");

      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " is a coward and does not want to fight!!")
        //subtract money from player
        playerMoney = playerMoney - 2;
      } else {
        fight();
      }
    }
      else {
      window.alert("You need to choose a valid option. Try Again!!");
   }
  };
fight();