/*
    CIT 281 Project 5
    Name: Qiqi Ma
*/

const MonsterGame = require("./p5-monster-game.js");

module.exports = class Monster {
  constructor({monsterName = "", minimumLife = 0, currentLife = 100}) {
      this.monsterName = monsterName,
      this.minimumLife = minimumLife,
      this.currentLife = currentLife,
      this.isAlive = ture
  }
  isAlive = () => {
  if (currentLife >= minimumLife) {
      this.isAlive = true
  }
};

  updateLife = (lifeChangeAmount) => {
     currentLife = 0 ? currentLife = 0: this.isAlive = true
  };
  getRandomInteger = (min, max) => {
     Math.floor(Math.random() * (max - min) + min);
};
  randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {
    this.updateLife(getRandomInterger(minimumLifeDrain, maximumLifeDrain))
  }
};

