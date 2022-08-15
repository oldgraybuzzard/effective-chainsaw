//function to set name
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
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
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } else {
        window.alert("You don't have enough money!");
      }
    }
};

console.log(playerInfo.name);

//function to address fight and skip responses
var fightOrSkip = function() {
  // ask player if they would like to fight or skip
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // conditional recursive function call
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.")
    return fightOrSkip();
  }

    // convert promptFight to all lowercase so we can check with less options
    promptFight = promptFight.toLowerCase();

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
        //confirm that the player is quitting
        var confirmSkip = window.confirm("Are you sure you want to quit? Quitting will cost you money.");

        //if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + " is a coward and does not want to fight!! Goodbye Loser!")
          //subtract money from player
          playerInfo.money = Math.max(0, playerInfo.money - 10);

          //return true if player wants to leave
          return true;
        }
      }
      return false;
    }; 

var fight = function(enemy) {
  // keep track of who goes first
  var isPlayerTurn = true;

  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }

      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      // remove enemy's health by subtracting the amount we set in the damage variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
      // player gets attacked first
    } else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      // remove player's health by subtracting the amount we set in the damage variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );

      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
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
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please choose an option: 1 for 'REFILL', 2 for 'UPGRADE', 3 for 'LEAVE' to make a choice.");
      // use switch statments to carry out the prompt action
      shopOptionPrompt = parseInt(shopOptionPrompt);
      switch (shopOptionPrompt) {
        case 1:
          playerInfo.refillHealth();
          break;
        case 2:
          playerInfo.upgradeAttack();
          break;
        case 3:
          window.alert("Leaving the store.")
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

console.log(enemyInfo[0]);
console.log(enemyInfo[1]);
console.log(enemyInfo[2]);


  //start the game when the page loads
  startGame();