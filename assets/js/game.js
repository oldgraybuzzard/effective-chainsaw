var playerInfo = {
  name: window.prompt("what is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } else {
        window.alert("You don't have enough money!");
      }
    },
    upgradeattack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } else {
        window.alert("You don't have enough money!");
      }
    }
};

console.log(playerInfo.name, playerInfo.health, playerInfo.attack, playerInfo.money);

var fight = function(enemy) {
  console.log(enemy);
  //repeat and execute as long as the enemy robot is alive
  while (playerInfo.health > 0 && enemy.health > 0) {
  //alert players that they are starting the round

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'SKIP' to not fight in this round. Otherwise just press 'ENTER'");
  console.log(promptFight);
  
  if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
      //confirm that the player is quitting
      var confirmSkip = window.confirm("Are you sure you want to quit? Quitting will cost you money.");

      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " is a coward and does not want to fight!! Goodbye Loser!")
        //subtract money from player
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)
        break;
      } 
  }
 
  //subtract the calue of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
  var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
  enemy.health = Math.max(0, enemy.health - damage);
   
  //log a resulting message to the console so that we know it worked.
  console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
  );

  //check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " did not survive your brutal attacks!");

      // //award player for winning
      // playerInfo.money = playerInfo.money + 20;
      // playerInfo.health = playerInfo.health + 12;
      // playerInfo.attack = playerInfo.attack + 3;
      // console.log(playerInfo.name + " has been awarded 10 Money, 12 Health, 3 Attacks for the defeat of " + enemy.name + "." );
      console.log(playerInfo.name + " current values are: Health=" + playerInfo.health + ", Money=" + playerInfo.money + ", Attack=" + playerInfo.attack + ".");

      break;

    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

  //subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
    var damage = randomNumber(enemy.attack -3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

  //log a resulting message to the console so we know that it worked.
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
  
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + "did not survive the brutal attacks of " + enemy.name + " .");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
  };

  // to start the game
  var startGame = function() {
      // reset player stats
      playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
          window.alert("Welcome to Robot Gladiators! Round " + ( i +1 ) );
          window.alert("Get ready for a battle");
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      fight(pickedEnemyObj);

      //if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
          playerInfo.refillHealth();
          break;
        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
          playerInfo.upgradeAttack();
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

  // function to generate a random numeric value
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() *(max-min +1) + min);

    return value;
  };

  var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

console.log(enemyInfo.length);
console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[1]);
console.log(enemyInfo[2]);


  //start the game when the page loads
  startGame();