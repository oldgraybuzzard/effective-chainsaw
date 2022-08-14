var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 50;

console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Rodo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
  //repeat and execute as long as the enemy robot is alive
  while (playerHealth > 0 && enemyHealth > 0) {
  //alert players that they are starting the round

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'SKIP' to not fight in this round. Otherwise just press 'ENTER'");
  console.log(promptFight);
  
  if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
      //confirm that the player is quitting
      var confirmSkip = window.confirm("Are you sure you want to quit? Quitting will cost you money.");

      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " is a coward and does not want to fight!! Goodbye Loser!")
        //subtract money from player
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      } 
  }
 
  //subtract the calue of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
   
  //log a resulting message to the console so that we know it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  //check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " did not survive your brutal attacks!");

      // //award player for winning
      // playerMoney = playerMoney + 20;
      // playerHealth = playerHealth + 12;
      // playerAttack = playerAttack + 3;
      // console.log(playerName + " has been awarded 10 Money, 12 Health, 3 Attacks for the defeat of " + enemyName + "." );
      console.log(playerName + " current values are: Health=" + playerHealth + ", Money=" + playerMoney + ", Attack=" + playerAttack + ".");

      break;

    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

  //subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

  //log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
  
    if (playerHealth <= 0) {
      window.alert(playerName + "did not survive the brutal attacks of " + enemyName + " .");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
  };

  // to start the game
  var startGame = function() {
      // reset player stats
      playerHealth = 100;
      playerAttack = 10;
      playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
          window.alert("Welcome to Robot Gladiators! Round " + ( i +1 ) );
          window.alert("Get ready for a battle");
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50
      fight(pickedEnemyName);

      //if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        //ask if player wants to shop before the next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        // if yes, take them to the store() function
        if (storeConfirm) {
        shop();
          }
        }
      }
      //if player is not alive break out of the loop and let endGame() run
    else {
      window.alert("You've lost your robot in battle! Game Over!");
      break;
    }
  }
 endGame();
};
  //to end the game
  var endGame = function() {
    // if the player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
      window.alert("You've lost your robot in battle");
    }
    // ask if player wants to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
      //restart the game
      startGame();
    } else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };

  //shop for perks
  var shop = function() {
    var shopOptionPrompt = window.prompt(
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice.");
      // use switch statments to carry out the prompt action
      switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
        case "Refill":
          if (playerMoney >= 7) {
          window.alert("Refilling players's health by 20 for 7 dollars.");
          
          // increase health and decrease money
          playerHealth = playerHealth + 20;
          playerMoney = playerMoney - 7;
          } else {
            window.alert("You do not have enough money!")
          }
          break;
        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
          if (playerMoney >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");

          //increase attack and decrease money
          playerAttack = playerAttack + 6;
          playerMoney = playerMoney - 7;
          } else window.alert("You do not have enough money!")
          break;
        case "leave":
        case "Leave":
        case "LEAVE":
          window.alert("Leaving the store.")

          //do nothing, so function will end
          break;
        default:
          window.alert("You did not pick a valid option Try again.");

          //call shop() agian to force player to pick a valid option
          shop();
          break;
      }
  };

  //start the game when the page loads
  startGame();